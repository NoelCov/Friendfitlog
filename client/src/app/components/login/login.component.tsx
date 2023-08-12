const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl mb-10">Login</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input type="text" className="border-b border-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input type="password" className="border-b border-black" />
        </div>
      </form>
    </div>
  );
};

export default Login;
