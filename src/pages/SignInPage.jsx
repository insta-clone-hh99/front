// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import * as Styled from "../component/Signup/style";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";
// import axios from "axios";
// import { API } from "../utils/Api";

// function SignInPage() {
//     const [loginId, setLoginId] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const [loginMutation, setLoginMutation] = useState("");
//     const [token, setToken] = useState("");

//     const fetchData = async () => {
//         try {
//             const response = await axios.post(API.API_URL1 + '/post');
//             console.log('Data API_URL1:', response.data);
//             setToken(response.data.token);
//             // Further logic with the token if needed
//         } catch (error) {
//             console.error('Error API_URL:', error);
//         }
//     };

//     const onLoginHandler = async () => {
//         if (!loginId || !password) {
//             setError("ID and password are required.");
//             return;
//         }

//         setError("");
//         try {
//             await fetchData(); // Fetch token from API

//             const { userData } = await loginMutation.mutateAsync({
//                 loginId,
//                 password,
//             });

//             console.log("User data after login:", userData);

//             // Set the cookie and header with the obtained token
//             document.cookie = `token=${token}; path=/`;
//             axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//         } catch (error) {
//             console.error("Error during login:", error);

//             if (error.response) {
//                 const status = error.response.status;
//                 const responseData = error.response.data;

//                 if (status === 400 && responseData.message === "데이터 형식이 올바르지 않습니다.") {
//                     setError("데이터 형식이 올바르지 않습니다.");
//                 } else if (status === 401 && responseData.message === "존재하지 않는 닉네임입니다.") {
//                     setError("존재하지 않는 닉네임입니다.");
//                 } else if (status === 401 && responseData.message === "비밀번호가 일치하지 않습니다.") {
//                     setError("비밀번호가 일치하지 않습니다.");
//                 } else {
//                     setError("로그인 중 예상치 못한 오류가 발생했습니다.");
//                 }
//             } else {
//                 setError("로그인 중 예상치 못한 오류가 발생했습니다.");
//             }
//         }
//     };

//     return (
//         <>
//             <Header />
//             <Styled.Container>
//                 <h2>Login</h2>
//                 <Styled.Form>
//                     {error && (
//                         <Styled.ErrorContainer>
//                             <Styled.ErrorText>{error}</Styled.ErrorText>
//                         </Styled.ErrorContainer>
//                     )}

//                     <Styled.Label htmlFor="loginId">ID:</Styled.Label>
//                     <Styled.Input
//                         type="text"
//                         id="loginId"
//                         value={loginId}
//                         onChange={(e) => setLoginId(e.target.value)}
//                     />

//                     <Styled.Label htmlFor="password">Password:</Styled.Label>
//                     <Styled.Input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />

//                     <Styled.Button
//                         type="button"
//                         onClick={onLoginHandler}
//                         disabled={loginMutation.isLoading}
//                     >
//                         {loginMutation.isLoading ? "Logging in..." : "Login"}
//                     </Styled.Button>

//                     <Styled.LinkText>
//                         계정이 없으신가요? <Link to="/signup">회원가입</Link>
//                     </Styled.LinkText>
//                 </Styled.Form>
//             </Styled.Container>
//             <Footer />
//         </>
//     );
// }

// export default SignInPage;
import React from "react";
import SignIn from "../components/SignIn/SignIn";

function SignInPage() {
    return (
        <div>
            <div>SignInPage</div>
            <SignIn />
        </div>
    );
}

export default SignInPage;
