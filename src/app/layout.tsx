import "./globals.css";
import Link from "next/link";
import Navbar from "../components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="mx-auto w-11/12 sm:w-9/12">
          <Navbar />
          <div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla, consequatur nobis blanditiis, maiores nemo ex facere, consectetur ipsam tempora reprehenderit a dicta in? Expedita laborum ipsa delectus veniam maiores ipsam tempore corrupti consectetur molestiae quisquam esse quidem quam reiciendis, sequi mollitia cumque, assumenda nulla animi? Minus quam nihil officia deleniti facilis nemo numquam voluptatibus? Ex corrupti ipsam excepturi sit laudantium, qui voluptate nemo iste quae? Fuga quaerat, in eaque vitae quasi voluptatibus, eos dignissimos nulla qui accusamus, architecto excepturi? Et repellat eligendi natus, similique assumenda aut dolorum, soluta voluptatem velit perferendis ducimus fuga vero beatae veritatis cum distinctio itaque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur aperiam ex odio? Pariatur dolor officia reprehenderit cumque sed, obcaecati, quia labore illo culpa numquam quasi optio consequuntur mollitia facere itaque in asperiores dolorem eligendi quisquam explicabo blanditiis quibusdam. Necessitatibus enim nesciunt, similique dignissimos sapiente facilis nihil. Ab sequi culpa itaque ratione? Ipsam nostrum, quis tempora consectetur nisi, sit esse assumenda voluptas eos blanditiis corrupti eum pariatur vel aliquid praesentium? Officia eos fugiat nisi. Eius commodi pariatur vero id qui voluptate eos unde corrupti a impedit nemo quo asperiores inventore possimus, non porro. Inventore, eaque corporis corrupti voluptas ipsa ratione, perspiciatis deserunt similique quisquam, non adipisci hic rerum sequi consequatur esse saepe. Nemo tempore ad voluptatum, et qui ipsum corrupti unde vel sit architecto magni doloremque beatae deserunt nihil pariatur iste temporibus distinctio ea eius. Tempore necessitatibus molestiae accusamus ducimus quod quae repellat iste impedit earum. Neque itaque quibusdam blanditiis saepe eius quo eum esse voluptas autem commodi repudiandae eaque quod consectetur ad veritatis obcaecati alias rem optio, accusamus laudantium, placeat illo necessitatibus tempora? Dolore commodi officia vitae quibusdam, itaque nam suscipit at a possimus in libero perspiciatis iste velit, earum laudantium dolor, animi molestiae qui recusandae ipsa corporis ullam sunt.</div>
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
