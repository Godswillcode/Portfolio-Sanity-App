import React, {useState, useEffect} from 'react'
 import sanityClient from "../client"
 import bg from "../images/bg2.jpg"
 import imageUrlBuilder from "@sanity/image-url";
 import BlockContent from "@sanity/block-content-to-react";

 const builder = imageUrlBuilder(sanityClient);
 function urlFor(source) {
   return builder.image(source);
 }

const About = () => {
  const [author, setAuthor] = useState(null)
  useEffect(() => {
    sanityClient.fetch(`*[_type == "author"] {
      name,
      bio,
      "authorImage": image.asset->url
    }`).then((data) => setAuthor(data[0]))
    .catch(console.error);
  }, [])

  console.log(author);

  if(!author) return <div>Loading...</div>
  return (
    <div className='relative'>
      <img src={bg} alt="about me" className='absolute w-full'/>
      <div className='p-10 lg:pt-48 container mx-auto relative'>
        <section className='bg-green-800 rounded-lg shadow-2xl lg:flex p-20'>
          <img src={urlFor(author.authorImage).url()} alt="author" className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8' />
          <div className='text-lg flex flex-col justify-center'>
            <h1 className='text-4xl text-white mb-4'>
              Hey there. I'm{" "}
              <span className='text-green-100'>{author.name}</span>
            </h1>
            <div className='lg:prose-md text-white text-sm'>
            <BlockContent
            blocks={author.bio}
            projectId="0kmsgvpl"
            dataset="production"
          />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About