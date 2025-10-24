import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import axios from "axios";
import { DatabaseService } from "src/database/database.service";
import { CreateArkUserDefaultData, CreateArkUserDto } from "./dto/ark.dto";



@Injectable()
export class ArkService implements OnModuleInit {
    constructor(private databaseService: DatabaseService) { }
    private readonly logger = new Logger(ArkService.name);
    private endpoints = {
        login: "login/public/api/v1/login",
        heartbeat: "admin/public/api/v1/heartbeat",
        liveUser: "admin/public/api/v1/user/get/live/users",
        createUser: "admin/public/api/v1/user"
    }

    private cred = {
        baseurl: "https://ark1api.arktrader.io/api/apigateway/",
        company: "Golden Bubbles",
        parentId: "36955",
        apiTimeoutInSeconds: 40,
        dealerUsername: process.env.ARK_DEALER_USERNAME,
        dealerPassword: process.env.ARK_DEALER_PASSWORD
    }
    async createNewUserInArk(userData: CreateArkUserDto) {
        try {
            const HeaderPart = await this.headerWithAuthPart()
            const response = await axios.post(`${this.cred.baseurl}${this.endpoints.createUser}`, { ...userData, ...CreateArkUserDefaultData }, HeaderPart);
            return true
        } catch (error) {
            console.error("Error creating user in ARK:", error.response?.data);
            return false
        }
    }

    async getLiveUsers() {
        try {
            const HeaderPart = await this.headerWithAuthPart()
            const response = await axios.get(`${this.cred.baseurl}${this.endpoints.liveUser}`, HeaderPart);
            console.log("Live users response:", response.data);
            return response?.data?.data;
        } catch (error) {
            console.error("Error getting live users from ARK:", error.response?.data);
            throw new Error("Failed to get live users from ARK");
        }
    }



    private async AuthenticateWithArk() {
        const latestTokenRecord = await this.databaseService.arkAuthToken.findFirst({
            orderBy: {
                createdAt: 'desc',
            },
        });
        if (latestTokenRecord && latestTokenRecord.lastupdated > new Date(Date.now() - 50 * 60 * 1000)) {
            return await this.HeartBeatAPI(latestTokenRecord);

        } else {
            return await this.loginInARK();
        }
    }

    private async loginInARK() {
        try {
            const response = await axios.post(
                `${this.cred.baseurl}${this.endpoints.login}`,
                {
                    "companyName": this.cred.company,
                    "password": this.cred.dealerPassword,
                    "userName": this.cred.dealerUsername
                }
            );
            const res = await this.databaseService.arkAuthToken.create({ data: { token: response?.data?.data?.token } })
            this.logger.log('ARK Login API called to authenticate user');
            return res.token;
        } catch (error) {
            console.error("Error logging in to ARK:", error.response?.data);
            throw new Error("Failed to login to ARK");
        }
    }

    private async HeartBeatAPI(currentAuthTokenRecord) {
        try {
            const response = await axios.get(`${this.cred.baseurl}${this.endpoints.heartbeat}`, this.headerPart(currentAuthTokenRecord.token));
            if (response?.data?.success === true) {
                this.databaseService.arkAuthToken.update({ where: { id: currentAuthTokenRecord.id }, data: { lastupdated: new Date() } })
                this.logger.log('ARK Heartbeat API called to refresh token');
                return currentAuthTokenRecord.token;
            }
        } catch (error) {
            console.error("Error on heartbeatt api in to ARK:", error);
            throw new Error("Failed to login to ARK");
        }
    }
    private async headerWithAuthPart() {
        const latestTokenRecord = await this.databaseService.arkAuthToken.findFirst({
            orderBy: {
                createdAt: 'desc',
            },
        });
        if (latestTokenRecord) {
            return this.headerPart(latestTokenRecord.token);
        }
        throw new Error("No valid token found");
    }
    private headerPart(AuthToken) {
        return {
            headers: {
                'Authorization': `Bearer ${AuthToken}`,
                'Content-Type': 'application/json'
            }
        };
    }

    @Cron('0 */20 * * * *')
    handleCron() {
        this.AuthenticateWithArk()
    }
    async onModuleInit() {
        this.logger.log('ARK Running initial authentication on startup');
        await this.AuthenticateWithArk();
    }
}