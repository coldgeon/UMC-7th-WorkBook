import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const SignUp = () => {
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onValid = (data) => {
    console.log(data);

    if (data.pwd != data.pwdcheck) {
      setError('pwdcheck', { message: '패스워드가 일치하지 않습니다.' }, { shouldFocus: true });
    }
  };

  return (
    <AuthWrapper>
      <AuthForm onSubmit={handleSubmit(onValid)}>
        <H2>회원가입</H2>
        <Input
          {...register('email', {
            required: '이메일은 필수입니다! ',
            pattern: {
              value: /^[A-Za-z-0-9\-\.]+@[A-Ja-z-0-9\-\.]+\.[A-Ja-z-0-9]+$/,
              message: '옳바르지 않은 이메일 형식입니다.',
            },
            shouldFocus: true,
          })}
          placeholder="이메일을 입력해주세요!"
        ></Input>
        <InputLabel>{errors?.email?.message}</InputLabel>
        <Input
          {...register('pwd', {
            required: '비밀번호는 필수입니다! ',
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/,
              message: '비밀번호는 8자리 이상 16자리까지 입력해주세요.',
            },
            shouldFocus: true,
          })}
          placeholder="비밀번호를 입력해주세요!"
          type={'password'}
        ></Input>
        <InputLabel>{errors?.pwd?.message}</InputLabel>
        <Input
          {...register('pwdcheck', {
            required: '비밀번호를 한 번 더 입력해주세요! ',
          })}
          placeholder="비밀번호를 한 번 더 입력해주세요! "
          type={'password'}
        ></Input>
        <InputLabel>{errors?.pwdcheck?.message}</InputLabel>
        <SubmitBtn>가입하기</SubmitBtn>
      </AuthForm>
    </AuthWrapper>
  );
};

export default SignUp;

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  /* justify-content: space-evenly; */
`;

export const H2 = styled.h2`
  font-size: 35px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Input = styled.input`
  height: 50px;
  /* margin-top: 10px; */
`;

export const InputLabel = styled.span`
  padding-top: 5px;
  height: 35px;
  color: red;
  margin-bottom: 10px;
`;

export const SubmitBtn = styled.button`
  height: 50px;
`;
