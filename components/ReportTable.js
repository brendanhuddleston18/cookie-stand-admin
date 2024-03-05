export default function ReportTable(props) {

    if (props.reports.length === 0) {
      return <h2>No Cookie Stands Available</h2>
    }

    const headers = ['Location', ...props.reports.hourly_sales, 'Totals'];

    return (
      <table className="w-2/3 mx-auto my-8 bg-purple-300 rounded-lg">
        <HeaderRow headerValues={headers}/>
        
      
      </table>

    );
  }


  function HeaderRow(props) {
    return (
      <thead className="bg-purple-500">
            <tr>
                {props.headerValues.map(header =>  {return <th key={header}>{header}</th>;})}
            </tr>
        </thead>
    )
  }

  function TableBody(props) {

  }

  function FooterRow(props) {

  }