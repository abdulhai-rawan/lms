import { Button } from "@/components/ui/button";
import { DataTable } from "./_components/data-table";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { columns } from "./_components/columns";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const CoursesPage = async () => {
  const { userId } = auth();

  if (!userId) return redirect("/");

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-6">
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CoursesPage;
