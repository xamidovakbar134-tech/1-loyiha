const Header = () => {
  return (
    <div className="fixed-top bg-white w-100 border-bottom">
 <div className="container mx-auto p-3 shadow-sm">
        <div className="flex items-center justify-center gap-220  border-gray-300 ">
            <h1 className="font-bold">Job Portal</h1>
            <div className="flex justify-center items-center gap-4">
                <p className="mt-2 text-blue-400">Home</p>
                <p className="mt-2 text-blue-400">Jobs</p>
                <button className="btn btn-primary">Post a Job</button>
            </div>
        </div>
    </div>
    </div>
   
  );
};

export default Header;