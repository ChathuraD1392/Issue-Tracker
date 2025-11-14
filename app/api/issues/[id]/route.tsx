import { CreateIssueSchema, PatchIssueSchema } from "@/app/validationSchema";
import prisma from "@/lib/prisma";
import delay from "delay";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const body = await request.json();
  const validation = PatchIssueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json({ error: "Invalid Request" }, { status: 400 });

  const { assignedToUserId, title, description } = body;
  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: assignedToUserId },
    });
    if (!user)
      return NextResponse.json({ error: "Invalid User" }, { status: 400 });
  }

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt((await params).id) },
  });

  if (!issue)
    return NextResponse.json({ error: "Issue Not Found" }, { status: 404 });

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: { title, description, assignedToUserId },
  });

  return NextResponse.json(updatedIssue, { status: 201 });
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  await delay(3000);
  const { id } = await context.params;
  const issueId = Number(id);

  if (isNaN(issueId))
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });

  const issue = await prisma.issue.findUnique({
    where: { id: issueId },
  });

  if (!issue)
    return NextResponse.json({ error: "Issue Not Found" }, { status: 404 });

  await prisma.issue.delete({
    where: { id: issueId },
  });

  return NextResponse.json("Issue Deleted", { status: 200 });
}
