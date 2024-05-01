import connectMongo from "@/dbConnect/connectMongo";
import User from "@/model/User";
import bcrypt from 'bcrypt';

export async function POST(request) {
    try {
        const req_body = await request.json();

        if (!req_body || !req_body.email) {
            return Response.json({ message: "Invalid Request", status: 400 });
        }

        await connectMongo();

        const user = await User.findOne({ email: req_body.email }).exec();
        if (!user) return Response.json({ status: 400, message: "Email is not found" });

        const validPass = await bcrypt.compare(req_body?.password, user.password);
        if (!validPass) return Response.json({ status: 500, message: "Invalid password" });

        const userResponse = { user, password: undefined };

        return Response.json({status: 200, message:'Login Successfully', data: userResponse});
    } catch (err) {
        console.error(err);
        return Response.json({ message: "Internal Server Error",status:500 });
    }
}



// async function loginUser(email, password) {
//     try {
//       const res = await fetch(base_url + "/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await res.json();
//       if (data.success) {
//         // Save the token to localStorage or cookies
//         localStorage.setItem('token', data.token);
//         // Redirect to the home page or dashboard
//         router.push("/dashboard");
//       } else {
//         // Show an error message
//         console.error(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }