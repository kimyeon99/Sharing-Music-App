import { useRouter } from "next/router";

// movies/1231241
export default function Detail(){
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <h4>{router.query.title || "Loading"}</h4>
        </div>
    );
}