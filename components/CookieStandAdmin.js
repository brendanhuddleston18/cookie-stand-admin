import { useState } from "react";
import Header from "./Header";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import Footer from "./Footer";

export default function CookieStandAdmin() {

    const [reports, setReports] = useState([])

    function handleCreate(standInfo) {
        setReports(...reports, standInfo)
    }

    return (
        <>
            <Header />
            <CreateForm createForm = {handleCreate}/>
            <ReportTable reports={reports}/>
            <Footer />
        </>
        
    );
}