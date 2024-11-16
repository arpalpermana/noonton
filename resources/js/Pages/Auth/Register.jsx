import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import { Link, Head, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };
    return (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/noonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel
                                        htmlFor="name"
                                        value="Full Name"
                                    />
                                    <TextInput
                                        value={data.name}
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Your Name..."
                                        autoComplete="off"
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="email"
                                        value="Email Address"
                                    />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Your Email..."
                                        autoComplete="off"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="password"
                                        value="Password"
                                    />
                                    <TextInput
                                        type="password"
                                        name="password"
                                        placeholder="********"
                                        autoComplete="off"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="passwordConfirmation"
                                        value="Confirm Password"
                                    />
                                    <TextInput
                                        type="password"
                                        name="passwordConfirmation"
                                        id="passwordConfirmation"
                                        placeholder="********"
                                        autoComplete="off"
                                        value={data.password_confirmation}
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button type="submit" disabled={processing}>
                                    <span className="text-base font-semibold">
                                        {" "}
                                        Sign Up{" "}
                                    </span>
                                </Button>

                                <Link href={route("prototype.login")}>
                                    <Button
                                        type="button"
                                        variant="white-outline"
                                        className="text-[#f1f1f1]"
                                    >
                                        <span className="text-base font-semibold">
                                            {" "}
                                            Already have account{" "}
                                        </span>
                                    </Button>
                                </Link>
                                {/* <!-- <button type="submit" className="rounded-2xl bg-alerange py-[13px] text-center">
                            <span className="text-base font-semibold">
                                Sign Up
                            </span>
                        </button> --> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
