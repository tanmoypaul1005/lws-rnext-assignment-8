import connectMongo from "@/dbConnect/connectMongo";
import User from "@/model/User";
import bcrypt from 'bcrypt';

export async function POST(request) {
    try {
        const req_body = await request.json();

        if (!req_body || !req_body.email) {
            return Response.json({success:false, message: "Invalid Request", status: 400 });
        }

        await connectMongo();

        const user = await User.findOne({ email: req_body.email }).exec();
        if (!user) return Response.json({success:false, status: 400, message: "Email is not found" });

        const validPass = await bcrypt.compare(req_body?.password, user.password);
        if (!validPass) return Response.json({success:false, status: 500, message: "Invalid password" });

        return Response.json({success:true, status: 200, message:'Login Successfully', data: user});
    } catch (err) {
        console.error(err);
        return Response.json({success:false, message: "Internal Server Error",status:500 });
    }
}