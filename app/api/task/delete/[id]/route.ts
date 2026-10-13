import Task from "@models/tasks";
import { connectToDB } from "@utils/database";

import { NextResponse } from "next/server";
import { IDeleteTaskRequestParam } from '@types'

export const DELETE = async( request: Request, { params } : 
IDeleteTaskRequestParam) => {
    try {
        await connectToDB()

        const { id } = await params;

        await Task.findByIdAndDelete(id)

        return NextResponse.json("Task deleted successfully", {
            status:200
        })

    }
    catch(error) {
        console.log(error)
        return NextResponse.json("Error deleting task", { 
        status:500
        })
    }
}