import SortBySvg from "@/components/SVG/DashboardIcons/SortBySvg";
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
const orders = [
  {
    orderId: "SV135",
    orderDate: "13/07/2025",
    videoType: "Animated",
    voiceOver: "Male",
    topic: "Horror",
    videoLength: "5-10",
    deliveryDate: "15/07/2025",
    revision: 0,
    status: "Delivered",
    view: "Details",
  },
  {
    orderId: "SV135",
    orderDate: "13/07/2025",
    videoType: "Animated",
    voiceOver: "Male",
    topic: "Horror",
    videoLength: "5-10",
    deliveryDate: "15/07/2025",
    revision: 0,
    status: "Delivered",
    view: "Details",
  },
  {
    orderId: "SV135",
    orderDate: "13/07/2025",
    videoType: "Animated",
    voiceOver: "Male",
    topic: "Horror",
    videoLength: "5-10",
    deliveryDate: "15/07/2025",
    revision: 0,
    status: "Delivered",
    view: "Details",
  },
  {
    orderId: "SV135",
    orderDate: "13/07/2025",
    videoType: "Animated",
    voiceOver: "Male",
    topic: "Horror",
    videoLength: "5-10",
    deliveryDate: "15/07/2025",
    revision: 0,
    status: "Pending",
    view: "Details",
  },
  {
    orderId: "SV135",
    orderDate: "13/07/2025",
    videoType: "Animated",
    voiceOver: "Male",
    topic: "Horror",
    videoLength: "5-10",
    deliveryDate: "15/07/2025",
    revision: 0,
    status: "Delivered",
    view: "Details",
  },
  {
    orderId: "SV135",
    orderDate: "13/07/2025",
    videoType: "Animated",
    voiceOver: "Male",
    topic: "Horror",
    videoLength: "5-10",
    deliveryDate: "15/07/2025",
    revision: 0,
    status: "Pending",
    view: "Details",
  },
  {
    orderId: "SV135",
    orderDate: "13/07/2025",
    videoType: "Animated",
    voiceOver: "Male",
    topic: "Horror",
    videoLength: "5-10",
    deliveryDate: "15/07/2025",
    revision: 0,
    status: "Delivered",
    view: "Details",
  },
  {
    orderId: "SV135",
    orderDate: "13/07/2025",
    videoType: "Animated",
    voiceOver: "Male",
    topic: "Horror",
    videoLength: "5-10",
    deliveryDate: "15/07/2025",
    revision: 0,
    status: "Pending",
    view: "Details",
  },
];

export default function Shorts() {
  const columns = [
    {
      accessorKey: "orderId",
      header: "Order Id",
    },
    {
      accessorKey: "orderDate",
      header: "Order Date",
    },
    {
      accessorKey: "videoType",
      header: "Video Type",
    },
    {
      accessorKey: "voiceOver",
      header: "Voice Over",
    },
    {
      accessorKey: "topic",
      header: "Topic",
    },
    {
      accessorKey: "videoLength",
      header: "Video Length",
    },
    {
      accessorKey: "deliveryDate",
      header: "Delivery Date",
    },
    {
      accessorKey: "revision",
      header: "Revision",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => (
        <p
          className={`${
            info.getValue()?.toLowerCase() == "delivered" ? delivered : pending
          }`}
        >
          {info?.getValue()}
        </p>
      ),
    },
    {
      accessorKey: "view",
      header: "View",
      cell: (info) => (
        <p className="underline cursor-pointer">{info.getValue()}</p>
      ),
    },
  ];

  const tableInstance = useReactTable({
    columns,
    data: orders,
    getCoreRowModel: getCoreRowModel(),
  });

  const pending = "text-[#F3A616]";
  const delivered = "text-[#2FA75F]";

  return (
    <div className="bg-white w-full p-8 rounded-2xl mt-4">
      <div className="flex items-center justify-between mb-3">
        <h6 className="text-2xl font-semibold leading-9 text-[#1C1D20]">
          Shorts Video
        </h6>
        <div className="flex items-center gap-3 border border-[#1C1D20] py-2 px-4 rounded-[4px] w-fit">
          <p className="text-sm font-medium text-[#1C1D20]">Sort By</p>
          <p className="w-6 h-6">
            <SortBySvg />
          </p>
        </div>
      </div>

      <Table className={"rounded-lg overflow-hidden text-base text-[#1C1D20]"}>
        <TableHeader>
          {tableInstance?.getHeaderGroups()?.map((headerGroup, idx) => (
            <TableRow key={idx} className={"bg-[#FAA693]"}>
              {headerGroup?.headers?.map((header, idx) => (
                <TableHead
                  key={idx}
                  className="p-4 font-semibold border border-[#A6AAB5] border-collapse"
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
                  className="p-4 border border-[#A6AAB5] border-collapse"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <button className="mt-8 py-3 px-6 rounded-[8px] bg-[#E52621] text-lg text-white font-medium leading-[27px] flex items-center justidy-center mx-auto cursor-pointer hover:bg-red-700 duration-300">
        Request New
      </button>
    </div>
  );
}
