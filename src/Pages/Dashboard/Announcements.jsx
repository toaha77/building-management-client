import { useForm } from "react-hook-form";

const Announcements = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="mt-4">
      <h2 className="text-3xl text-center">Add an Announcements</h2>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Title*</span>
            </label>
            <input
              type="text"
              placeholder="Type Here"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Description*</span>
            </label>
            <input
              type="text"
              placeholder="Type Here"
              {...register("description", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="text-center">
          <input className="btn bg-green-500 hover:bg-green-500" type="submit"  />

          </div>
        </form>
      </div>
    </div>
  );
};

export default Announcements;
