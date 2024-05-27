import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"


export default function Add() {
    const [postimg, setpostimg] = useState({})
    const PostImg = (file) => {
        if (!file) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => (setpostimg(reader.result))
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()


    const onSubmit = (data) => {
        axios.post('http://localhost:8000/shop', { ...data, img: postimg })
        reset();
    }
    return (
        <div className="Admin_add">
            <form onSubmit={handleSubmit(onSubmit)} className=" container">
                <input type="file" name="img" onChange={(e) => PostImg(e.target.files[0])} />
                <input placeholder="Name" {...register("name")} />
                <input placeholder="Money" {...register("money", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <div className="Add_input container">
                    <div className="row">
                        <input type="submit" className="col" />
                        <div className="col-lg-2">
                            <Link to='/Admin' className="btn btn-primary col">Geri</Link>
                        </div>

                    </div>
                </div>
            </form>
        </div>

    )
}