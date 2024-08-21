import UserData from '../../../models/usersModel'
import { NextResponse } from 'next/server'


export async function GET(request) {
    try {
        const users = await UserData.find();
        console.log(users);
        return NextResponse.json({ users });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}