
import {NextRequest, NextResponse} from "next/server"




export async function POST(request){
    try {
      const reqBody= await request.json()
        const { amount, id } = reqBody;
        console.log(amount)
        const paymentIntent = await stripe.paymentIntents.create({
          amount,
          currency: 'usd',
          payment_method: id,
          confirm: true,
        });
  
        return NextResponse.json({success:true},{paymentIntent})
      } catch (error) {
        return NextResponse.json({error:error.message})
      }
    }   

