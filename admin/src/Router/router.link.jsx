import React from "react";
import { Route, Navigate } from "react-router-dom";
import ProductList from "../feature-module/inventory/productlist";
// import Dashboard from "../feature-module/dashboard/Dashboard";
import AddProduct from "../feature-module/inventory/addproduct";
import SalesDashbaord from "../feature-module/dashboard/salesdashbaord";
import BrandList from "../feature-module/inventory/brandlist";
import VariantAttributes from "../feature-module/inventory/variantattributes";
import Warranty from "../feature-module/inventory/warranty";
import PrintBarcode from "../feature-module/inventory/printbarcode";
import Grid from "../feature-module/uiinterface/grid";
import Images from "../feature-module/uiinterface/images";
import Lightboxes from "../feature-module/uiinterface/lightbox";
import Media from "../feature-module/uiinterface/media";
import Modals from "../feature-module/uiinterface/modals";
import Offcanvas from "../feature-module/uiinterface/offcanvas";
import Pagination from "../feature-module/uiinterface/pagination";

import Alert from "../feature-module/uiinterface/alert";
import Accordion from "../feature-module/uiinterface/accordion";
import Avatar from "../feature-module/uiinterface/avatar";
import Badges from "../feature-module/uiinterface/badges";
import Borders from "../feature-module/uiinterface/borders";
import Buttons from "../feature-module/uiinterface/buttons";
import ButtonsGroup from "../feature-module/uiinterface/buttonsgroup";
import Popovers from "../feature-module/uiinterface/popover";

import Breadcrumb from "../feature-module/uiinterface/breadcrumb";
import Cards from "../feature-module/uiinterface/cards";
import Dropdowns from "../feature-module/uiinterface/dropdowns";
import Colors from "../feature-module/uiinterface/colors";
import Carousel from "../feature-module/uiinterface/carousel";
import Spinner from "../feature-module/uiinterface/spinner";
import NavTabs from "../feature-module/uiinterface/navtabs";
import Toasts from "../feature-module/uiinterface/toasts";
import Typography from "../feature-module/uiinterface/typography";
import Video from "../feature-module/uiinterface/video";
import Tooltips from "../feature-module/uiinterface/tooltips";
import DragDrop from "../feature-module/uiinterface/advancedui/dragdrop";
import SweetAlert from "../feature-module/uiinterface/sweetalert";
import Progress from "../feature-module/uiinterface/progress";
import Placeholder from "../feature-module/uiinterface/placeholder";
import Rating from "../feature-module/uiinterface/advancedui/rating";
import TextEditor from "../feature-module/uiinterface/advancedui/texteditor";
import Counter from "../feature-module/uiinterface/advancedui/counter";
import Uiscrollbar from "../feature-module/uiinterface/advancedui/uiscrollbar";
import Stickynote from "../feature-module/uiinterface/advancedui/stickynote";
import Timeline from "../feature-module/uiinterface/advancedui/timeline";
import Apexchart from "../feature-module/uiinterface/charts/apexcharts";
import ChartJs from "../feature-module/uiinterface/charts/chartjs";
import RangeSlides from "../feature-module/uiinterface/rangeslider";
import FontawesomeIcons from "../feature-module/uiinterface/icons/fontawesome";
import FeatherIcons from "../feature-module/uiinterface/icons/feathericon";
import IonicIcons from "../feature-module/uiinterface/icons/ionicicons";
import MaterialIcons from "../feature-module/uiinterface/icons/materialicon";
import PE7Icons from "../feature-module/uiinterface/icons/pe7icons";
import SimplelineIcons from "../feature-module/uiinterface/icons/simplelineicon";
import ThemifyIcons from "../feature-module/uiinterface/icons/themify";
import WeatherIcons from "../feature-module/uiinterface/icons/weathericons";
import TypiconIcons from "../feature-module/uiinterface/icons/typicons";
import FlagIcons from "../feature-module/uiinterface/icons/flagicons";

const routes = all_routes;

import DepartmentGrid from "../feature-module/hrm/departmentgrid";
import DepartmentList from "../feature-module/hrm/departmentlist";
import Designation from "../feature-module/hrm/designation";
import Shift from "../feature-module/hrm/shift";
import AttendanceEmployee from "../feature-module/hrm/attendance-employee";
import ClipBoard from "../feature-module/uiinterface/advancedui/clipboard";
import TablesBasic from "../feature-module/uiinterface/table/tables-basic";
import DataTables from "../feature-module/uiinterface/table/data-tables";
import FormBasicInputs from "../feature-module/uiinterface/forms/formelements/basic-inputs";
import CheckboxRadios from "../feature-module/uiinterface/forms/formelements/checkbox-radios";
import InputGroup from "../feature-module/uiinterface/forms/formelements/input-group";
import GridGutters from "../feature-module/uiinterface/forms/formelements/grid-gutters";
import FormSelect from "../feature-module/uiinterface/forms/formelements/form-select";
import FileUpload from "../feature-module/uiinterface/forms/formelements/fileupload";
import FormMask from "../feature-module/uiinterface/forms/formelements/form-mask";
import FormHorizontal from "../feature-module/uiinterface/forms/formelements/layouts/form-horizontal";
import FormVertical from "../feature-module/uiinterface/forms/formelements/layouts/form-vertical";
import FloatingLabel from "../feature-module/uiinterface/forms/formelements/layouts/floating-label";
import FormValidation from "../feature-module/uiinterface/forms/formelements/layouts/form-validation";
import FormSelect2 from "../feature-module/uiinterface/forms/formelements/layouts/form-select2";
import Ribbon from "../feature-module/uiinterface/advancedui/ribbon";
import Chats from "../feature-module/Application/chat";
import ExpensesList from "../feature-module/FinanceAccounts/expenseslist";
import ExpenseCategory from "../feature-module/FinanceAccounts/expensecategory";
import Calendar from "../feature-module/Application/calendar";
import FormWizard from "../feature-module/uiinterface/forms/formelements/form-wizard";
import ExpiredProduct from "../feature-module/inventory/expiredproduct";
import LowStock from "../feature-module/inventory/lowstock";
import CategoryList from "../feature-module/inventory/categorylist";
import SubCategories from "../feature-module/inventory/subcategories";
import EditProduct from "../feature-module/inventory/editproduct";
import Videocall from "../feature-module/Application/videocall";
import Audiocall from "../feature-module/Application/audiocall";
import Email from "../feature-module/Application/email";
import Callhistory from "../feature-module/Application/callhistory";
import ToDo from "../feature-module/Application/todo";
import QRcode from "../feature-module/inventory/qrcode";
import PurchasesList from "../feature-module/purchases/purchaseslist";
import PurchaseOrderReport from "../feature-module/purchases/purchaseorderreport";
import PurchaseReturns from "../feature-module/purchases/purchasereturns";
import Appearance from "../feature-module/settings/websitesettings/appearance";
import SocialAuthentication from "../feature-module/settings/websitesettings/socialauthentication";
import LanguageSettings from "../feature-module/settings/websitesettings/languagesettings";
import InvoiceSettings from "../feature-module/settings/appsetting/invoicesettings";
import PrinterSettings from "../feature-module/settings/appsetting/printersettings";
import PosSettings from "../feature-module/settings/websitesettings/possettings";
import CustomFields from "../feature-module/settings/websitesettings/customfields";
import EmailSettings from "../feature-module/settings/systemsettings/emailsettings";
import SmsGateway from "../feature-module/settings/systemsettings/smsgateway";
import OtpSettings from "../feature-module/settings/systemsettings/otpsettings";
import GdprSettings from "../feature-module/settings/systemsettings/gdprsettings";
import PaymentGateway from "../feature-module/settings/financialsettings/paymentgateway";
import BankSetting from "../feature-module/settings/financialsettings/banksetting";
import Customers from "../feature-module/people/customers";
import Suppliers from "../feature-module/people/suppliers";
import StoreList from "../core/modals/peoples/storelist";
import Managestock from "../feature-module/stock/managestock";
import StockAdjustment from "../feature-module/stock/stockAdjustment";
import StockTransfer from "../feature-module/stock/stockTransfer";
import SalesReport from "../feature-module/Reports/salesreport";
import PurchaseReport from "../feature-module/Reports/purchasereport";
import InventoryReport from "../feature-module/Reports/inventoryreport";
import Invoicereport from "../feature-module/Reports/invoicereport";
import SupplierReport from "../feature-module/Reports/supplierreport";
import CustomerReport from "../feature-module/Reports/customerreport";
import ExpenseReport from "../feature-module/Reports/expensereport";
import IncomeReport from "../feature-module/Reports/incomereport";
import TaxReport from "../feature-module/Reports/taxreport";
import ProfitLoss from "../feature-module/Reports/profitloss";
import GeneralSettings from "../feature-module/settings/generalsettings/generalsettings";
import SecuritySettings from "../feature-module/settings/generalsettings/securitysettings";
import Notification from "../feature-module/settings/generalsettings/notification";
import ConnectedApps from "../feature-module/settings/generalsettings/connectedapps";
import SystemSettings from "../feature-module/settings/websitesettings/systemsettings";
import CompanySettings from "../feature-module/settings/websitesettings/companysettings";
import LocalizationSettings from "../feature-module/settings/websitesettings/localizationsettings";
import Prefixes from "../feature-module/settings/websitesettings/prefixes";
import Preference from "../feature-module/settings/websitesettings/preference";
import BanIpaddress from "../feature-module/settings/othersettings/ban-ipaddress";
import StorageSettings from "../feature-module/settings/othersettings/storagesettings";
import Pos from "../feature-module/sales/pos";
import AttendanceAdmin from "../feature-module/hrm/attendanceadmin";
import Payslip from "../feature-module/hrm/payslip";
import Holidays from "../feature-module/hrm/holidays";
import SalesList from "../feature-module/sales/saleslist";
import InvoiceReport from "../feature-module/sales/invoicereport";
import SalesReturn from "../feature-module/sales/salesreturn";
import QuotationList from "../feature-module/sales/quotationlist";
import Notes from "../feature-module/Application/notes";
import FileManager from "../feature-module/Application/filemanager";
import Profile from "../feature-module/pages/profile";
// import Signin from "../feature-module/pages/login/signin";
import SigninTwo from "../feature-module/pages/login/signinTwo";
import SigninThree from "../feature-module/pages/login/signinThree";
import RegisterTwo from "../feature-module/pages/register/registerTwo";
import Register from "../feature-module/pages/register/register";
import RegisterThree from "../feature-module/pages/register/registerThree";
import Forgotpassword from "../feature-module/pages/forgotpassword/forgotpassword";
import ForgotpasswordTwo from "../feature-module/pages/forgotpassword/forgotpasswordTwo";
import ForgotpasswordThree from "../feature-module/pages/forgotpassword/forgotpasswordThree";
import Resetpassword from "../feature-module/pages/resetpassword/resetpassword";
import ResetpasswordTwo from "../feature-module/pages/resetpassword/resetpasswordTwo";
import ResetpasswordThree from "../feature-module/pages/resetpassword/resetpasswordThree";
import EmailVerification from "../feature-module/pages/emailverification/emailverification";
import EmailverificationTwo from "../feature-module/pages/emailverification/emailverificationTwo";
import EmailverificationThree from "../feature-module/pages/emailverification/emailverificationThree";
import Twostepverification from "../feature-module/pages/twostepverification/twostepverification";
import TwostepverificationTwo from "../feature-module/pages/twostepverification/twostepverificationTwo";
import TwostepverificationThree from "../feature-module/pages/twostepverification/twostepverificationThree";
import Lockscreen from "../feature-module/pages/lockscreen";
import Error404 from "../feature-module/pages/errorpages/error404";
import Error500 from "../feature-module/pages/errorpages/error500";
import Blankpage from "../feature-module/pages/blankpage";
import Comingsoon from "../feature-module/pages/comingsoon";
import Undermaintainence from "../feature-module/pages/undermaintainence";
// import Users from "../feature-module/usermanagement/users";
import Users from "../views/users";
import WithdrawRequest from "../views/withdrawRequest";
import DepositRequest from "../views/depositRequest";
import Dashboard from "../views/Dashboard";
import Signin from "../views/signin";

import RolesPermissions from "../feature-module/usermanagement/rolespermissions";
import Permissions from "../feature-module/usermanagement/permissions";
import DeleteAccount from "../feature-module/usermanagement/deleteaccount";
import EmployeesGrid from "../feature-module/hrm/employeesgrid";
import EditEmployee from "../feature-module/hrm/editemployee";
import AddEmployee from "../feature-module/hrm/addemployee";
import LeavesAdmin from "../feature-module/hrm/leavesadmin";
import LeavesEmployee from "../feature-module/hrm/leavesemployee";
import LeaveTypes from "../feature-module/hrm/leavetypes";
import ProductDetail from "../feature-module/inventory/productdetail";
import { Units } from "../feature-module/inventory/units";
import TaxRates from "../feature-module/settings/financialsettings/taxrates";
import CurrencySettings from "../feature-module/settings/financialsettings/currencysettings";
import WareHouses from "../core/modals/peoples/warehouses";
import Coupons from "../feature-module/coupons/coupons";
import { all_routes } from "./all_routes";
import BankSettingGrid from "../feature-module/settings/financialsettings/banksettinggrid";
import PayrollList from "../feature-module/hrm/payroll-list";

export const publicRoutes = [
  {
    id: 1,
    path: routes.users,
    name: "users",
    element: <Users />,
    route: Route,
  },
  {
    id: 2,
    path: routes.dashboard,
    name: "dashboard",
    element: <Dashboard />,
    route: Route,
  },
  {
    id: 3,
    path: routes.withdrawRequest,
    name: "withdrawRequest",
    element: <WithdrawRequest />,
    route: Route,
  },
  {
    id: 4,
    path: routes.depositRequests,
    name: "depositRequests",
    element: <DepositRequest />,
    route: Route,
  },
];

export const posRoutes = [
  {
    id: 1,
    path: routes.pos,
    name: "pos",
    element: <Pos />,
    route: Route,
  },
];

export const pagesRoute = [
  {
    id: 1,
    path: routes.signin,
    name: "signin",
    element: <Signin />,
    route: Route,
  },
  {
    id: 2,
    path: routes.signintwo,
    name: "signintwo",
    element: <SigninTwo />,
    route: Route,
  },
  {
    id: 3,
    path: routes.signinthree,
    name: "signinthree",
    element: <SigninThree />,
    route: Route,
  },
  {
    id: 4,
    path: routes.register,
    name: "register",
    element: <Register />,
    route: Route,
  },
  {
    id: 5,
    path: routes.registerTwo,
    name: "registerTwo",
    element: <RegisterTwo />,
    route: Route,
  },
  {
    id: 6,
    path: routes.registerThree,
    name: "registerThree",
    element: <RegisterThree />,
    route: Route,
  },
  {
    id: 7,
    path: routes.forgotPassword,
    name: "forgotPassword",
    element: <Forgotpassword />,
    route: Route,
  },
  {
    id: 7,
    path: routes.forgotPasswordTwo,
    name: "forgotPasswordTwo",
    element: <ForgotpasswordTwo />,
    route: Route,
  },
  {
    id: 8,
    path: routes.forgotPasswordThree,
    name: "forgotPasswordThree",
    element: <ForgotpasswordThree />,
    route: Route,
  },
  {
    id: 9,
    path: routes.resetpassword,
    name: "resetpassword",
    element: <Resetpassword />,
    route: Route,
  },
  {
    id: 10,
    path: routes.resetpasswordTwo,
    name: "resetpasswordTwo",
    element: <ResetpasswordTwo />,
    route: Route,
  },
  {
    id: 11,
    path: routes.resetpasswordThree,
    name: "resetpasswordThree",
    element: <ResetpasswordThree />,
    route: Route,
  },
  {
    id: 12,
    path: routes.emailverification,
    name: "emailverification",
    element: <EmailVerification />,
    route: Route,
  },
  {
    id: 12,
    path: routes.emailverificationTwo,
    name: "emailverificationTwo",
    element: <EmailverificationTwo />,
    route: Route,
  },
  {
    id: 13,
    path: routes.emailverificationThree,
    name: "emailverificationThree",
    element: <EmailverificationThree />,
    route: Route,
  },
  {
    id: 14,
    path: routes.twostepverification,
    name: "twostepverification",
    element: <Twostepverification />,
    route: Route,
  },
  {
    id: 15,
    path: routes.twostepverificationTwo,
    name: "twostepverificationTwo",
    element: <TwostepverificationTwo />,
    route: Route,
  },
  {
    id: 16,
    path: routes.twostepverificationThree,
    name: "twostepverificationThree",
    element: <TwostepverificationThree />,
    route: Route,
  },
  {
    id: 17,
    path: routes.lockscreen,
    name: "lockscreen",
    element: <Lockscreen />,
    route: Route,
  },
  {
    id: 18,
    path: routes.error404,
    name: "error404",
    element: <Error404 />,
    route: Route,
  },
  {
    id: 19,
    path: routes.error500,
    name: "error500",
    element: <Error500 />,
    route: Route,
  },
  {
    id: 20,
    path: routes.comingsoon,
    name: "comingsoon",
    element: <Comingsoon />,
    route: Route,
  },
  {
    id: 21,
    path: routes.undermaintenance,
    name: "undermaintenance",
    element: <Undermaintainence />,
    route: Route,
  },
];
