import connectMongo from "@/dbConnect/connectMongo";
import User from "@/model/User";
import bcrypt from 'bcrypt';

export async function POST(request) {
  try {
    const new_user = await request.json();
    await connectMongo();

    // Check if a user with the given email already exists
    const existingUser = await User.findOne({ email: new_user.email });
    if (existingUser) {
      return Response.json({
        status: 400,
        success: false,
        data: null,
        message: "Email already in use",
      });
    }

    const hashedPassword = await bcrypt.hash(new_user.password, 10);
    const _user = new User({...new_user,password:hashedPassword});

    await _user.save();
    return Response.json({
      status: 201,
      success: true,
      data: _user,
      message: "User Registration successfully",
    });
  } catch (err) {
    console.error(err);
    return Response.json({
      status: 500,
      success: false,
      data: null,
      message: "Internal Server Error",
    });
  }
}


export async function GET(request,{ params }) {
    try{
        await connectMongo();
        const user = await User.find({email:params?.email});
        return Response.json({
            status: 200,
            success: true,
            data: user,
            message: "User find successfully",
        });
    }catch{
        console.error(err);
        return Response.json({
            status: 500,
            success: false,
            data: null,
            message: "Internal Server Error",
        });
    }
}