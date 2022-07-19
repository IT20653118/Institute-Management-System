import React from 'react'
import "../../style.css"
import Sidenav from '../../components/admin/Sidenav'
import AddPayment from '../../components/modal/PaymentModal/AddPayment'
import SearchPayment from '../../components/modal/PaymentModal/SearchPayment'
import UpdatePayment from '../../components/modal/PaymentModal/UpdatePayment'
import DeletePayment from '../../components/modal/PaymentModal/DeletePayment'
import ViewAllPayment from '../../components/modal/PaymentModal/ViewAllPayment'
import GenerateReport from '../../components/modal/PaymentModal/GenerateReport'

export default function SalaryPayment() {
    return (
        <div>
            <br></br>
            <br></br>
            <Sidenav />
            <div class="row text-center inline">
                <div class="col-md-2"></div>
                <div class="col-md-10">
                
                    <br></br>
                    <br></br>
                    <AddPayment />
                    <UpdatePayment/>
                    <DeletePayment/>
                    <SearchPayment/>
                    <br></br>
                    <br></br>
                    <ViewAllPayment/>
                    <br></br>
                    <br></br>
                    <GenerateReport/>


                    
                </div>
            </div>
        </div>
    )
}
