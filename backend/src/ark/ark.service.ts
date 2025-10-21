import { Injectable } from "@nestjs/common";
import axios from "axios";



@Injectable()
export class ArkService {
    private cred = {
        url: "https://ark1api.arktrader.io/api/apigateway/login/public/api/v1",
        company: "Golden Bubbles",
        parentId: "36955",
        apiTimeoutInSeconds: 30,
        dealerUsername: process.env.ARK_DEALER_USERNAME,
        dealerPassword: process.env.ARK_DEALER_PASSWORD
    }

    async loginInARK() {
        console.log(this.cred);

        try {
            const response = await axios.post(
                `${this.cred.url}/login`,
                {
                    "companyName": this.cred.company,
                    "password": this.cred.dealerPassword,
                    "userName": this.cred.dealerUsername
                }
            );

            console.log(response, this.cred.dealerUsername);


            return response.data.data.token;
        } catch (error) {
            console.error("Error logging in to ARK:", error);
            throw new Error("Failed to login to ARK");
        }

    }

}