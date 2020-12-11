import HomePage from './components/HomePage'
import Process from './components/content/cash/Process'
import ReceiveAndPayment from './components/content/cash/ReceiveAndPayment'
import PaymentVoucher from './components/content/cash/PaymentVoucher'
import SupplierPage from './components/content/cash/Process/SupplierPage'
import Cash from './components/content/Cash'
import AccountPage from './components/content/cash/Process/AccountPage'


export const routes = [
    {path:'/',name:'homepage',component:HomePage,
        children:[
            {path:'/',name:'cash',component:Cash,
                children:[
                    {path:'/',name:'process',component:Process},
                    {path:'/receiveandpayment',name:'receiveandpayment',component:ReceiveAndPayment},
                    {path:'/paymentvoucher/:id',name:'paymentvoucher',component:PaymentVoucher},
                    {path:'/paymentvoucher',name:'paymentvoucher',component:PaymentVoucher},
                ]},
            {path:'/supplierpage',name:'supplierpage',component:SupplierPage},
            {path:'/accountpage',name:'account',component:AccountPage},
        ]
    },
]