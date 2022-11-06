import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGenerator = warehouse =>{

    const doc = new jsPDF();

    const tableColumn = ["ID","Name","ADDRESS","COMPANY","CONTACT NO"];
    const tableRows = [];

    warehouse.forEach(warehouse => {
        const WarehouseData = [
          warehouse.warehouse_id,
          warehouse.warehouse_name,
          warehouse.warehouse_address,
          warehouse.warehouse_company,
          warehouse.warehouse_contactno


        ]
      tableRows.push(WarehouseData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("WareHouse Details List",14,15);
    doc.save(`warehouse_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGenerator;