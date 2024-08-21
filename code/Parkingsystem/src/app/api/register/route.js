import { connect } from "../../../dbconfig/dbConfig"
import User from "../../../models/usersModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"


connect()

export async function POST(request) {
    try {
        const reqBody = await request.json()
        const { firstName, lastName, email, password } = reqBody;
        console.log(reqBody);
        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "User already exists", status: 400 }
            )
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()

        return NextResponse.json({
            message: "User Created Succesfully",
            savedUser
        })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}