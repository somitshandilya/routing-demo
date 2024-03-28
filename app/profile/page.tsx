import Link from "next/link"

const Profile = () => {
    const id = 2
return (
    <>
    <h2>This is Profile Page</h2>
    <Link href="/dashboard">Go to DashBoard Page</Link><br />
    <Link href={`/products/${id}`}>My Products</Link>
    </>
)

}
export default Profile