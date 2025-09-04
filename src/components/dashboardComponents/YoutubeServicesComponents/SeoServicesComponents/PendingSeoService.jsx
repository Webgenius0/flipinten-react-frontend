import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

// sample data
const channels = [
  {
    orderDate: "17/08/2025",
    orderId: "YTSE001",
    planName: "Basic-SEO",
    myChannel: "XYZ",
    deliveryIn: "7 Days",
    details: "View",
  },
  {
    orderDate: "",
    orderId: "",
    planName: "",
    myChannel: "",
    deliveryIn: "",
    details: "",
  },
];



export default function PendingSeoService() {
  const columns = [
    {
      accessorKey: "orderDate",
      header: "Order Date",
    },
    {
      accessorKey: "orderId",
      header: "Order Id",
    },
    {
      accessorKey: "planName",
      header: "Plan Name",
    },
    {
      accessorKey: "myChannel",
      header: "My Channel",
    },
    {
      accessorKey: "deliveryIn",
      header: "Delivery In",
    },
    {
      accessorKey: "details",
      header: "Details",
      cell: (info) => (
        <button type="button" className="cursor-pointer">
          {info?.getValue()}
        </button>
      ),
    },
  ];

  const tableInstance = useReactTable({
    columns,
    data: channels,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      {/* table */}
      <Table
        className={"rounded-lg mt-8 overflow-hidden text-base text-[#1C1D20]"}
      >
        <TableHeader>
          {tableInstance?.getHeaderGroups()?.map((headerGroup, idx) => (
            <TableRow key={idx} className={""}>
              {headerGroup?.headers?.map((header, idx) => (
                <TableHead
                  key={idx}
                  className="p-4 font-semibold border border-[#A6AAB5] border-collapse bg-[#FAA693] text-center"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {tableInstance?.getRowModel()?.rows?.map((row, idx) => (
            <TableRow key={idx}>
              {row?.getVisibleCells()?.map((cell, idx) => (
                <TableCell
                  key={idx}
                  className="p-4 border border-[#A6AAB5] border-collapse text-center"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
