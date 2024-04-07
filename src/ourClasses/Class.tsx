type Props = {
    name: string;
    description?: string;
    image: string;
  };
  
  const Class = ({ name, description, image }: Props) => {
    const overlayStyles = `p-2 sm:p-5 absolute z-30 flex
    h-[100%] w-[100%] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;
  
    return (
      <li className="relative h-[93%] my-[10px] w-[99%] sm:w-[95%]">
        <div className={overlayStyles}>
          <p className="text-xl">{name}</p>
          <p className="mt-2">{description}</p>
        </div>
        <img className="w-[100%]  h-auto" alt={`${image}`} src={image} />
      </li>
    );
  };
  
  export default Class;