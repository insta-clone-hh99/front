// import React,
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import * as Styled from "./style";
// import axios from "axios";
// import { api1 } from "../../utils/Api";

// function SignIn() {
// const [userEmail, setUserEmail] = useState("");
// const [userPw, setUserPw] = useState("");
// const [error, setError] = useState("");
// const [token, setToken] = useState("");
// const [loginMutation, setLoginMutation] = useState(null);

// useEffect(() => {
//     if (token) {
//         document.cookie = `token=${token}; path=/`;
//         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     }
// }, [token]);

// useEffect(() => {
//     console.log("loginMutation:", loginMutation);
// }, [loginMutation]);

// const fetchData = async () => {
//     try {
//         const response = await api1.post("/api/signup");
//         console.log("Data API_URL1:", response.data);
//         setToken(response.data.token);
//     } catch (error) {
//         console.error("Error API_URL:", error);
//     }
// };

// const onLoginHandler = async () => {
//     if (!userEmail || !userPw) {
//         setError("ID and Password are required.");
//         return;
//     }

//     setError("");
//     try {
//         await fetchData();

//         document.cookie = `token=${token}; path=/`;
//         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//         if (loginMutation) {
//             const { userData } = await loginMutation.mutateAsync({
//                 userEmail,
//                 userPw,
//             });

//             console.log("User data after login:", userData);

//             const { userName } = userData;
//             console.log("welcome, ", userName);
//         }
//     } catch (error) {
//         console.error("Error during login:", error);

//         if (error.response) {
//             const status = error.response.status;
//             const responseData = error.response.data;

//             if (
//                 status === 401 &&
//                 responseData.message === "Email 또는 비밀번호가 틀립니다."
//             ) {
//                 setError("Email 또는 비밀번호가 틀립니다.");
//             } else if (
//                 status === 400 &&
//                 responseData.message ===
//                     "비밀번호는 4~12자리의 영문 대소문자와 숫자의 조합이되어야 합니다."
//             ) {
//                 setError(
//                     "비밀번호는 4~12자리의 영문 대소문자와 숫자의 조합이되어야 합니다."
//                 );
//             }
//         }
//     }
// };

//     return (
//         <Styled.Content>
//             <Styled.Lgtitle>
//                 <Styled.Span>instagram</Styled.Span>
//                 <Styled.FlexCenter>
//                     <Styled.Input
//                     id="?"
//                     type="text"
//                     placeholder="email"
//                     />
//                     <Styled.Input
//                     id="?"
//                     type="text"
//                     placeholder="pw"
//                     />
//                 <Styled.Button>로그인</Styled.Button>
//                 </Styled.FlexCenter>
//             </Styled.Lgtitle>
//         </Styled.Content>
//     );
// }

// export default SignIn;

import Styled from "./style";
import InstagramLogo from "../../assets/insta-rogo.png";

function SignIn() {
    return (
        <Styled.Content>
            <Styled.Lgtitle>
                <Styled.Span>
                    <img src={InstagramLogo} alt="Instagram Logo" />
                </Styled.Span>
                <Styled.FlexCenter>
                    <Styled.Input
                        id="?"
                        type="text"
                        placeholder="전화번호, 사용자 이름 또는 이메일"
                    />
                    <Styled.Input id="?" type="text" placeholder="비밀번호" />
                    <Styled.Button>로그인</Styled.Button>
                </Styled.FlexCenter>
            </Styled.Lgtitle>
        </Styled.Content>
    );
}

export default SignIn;
