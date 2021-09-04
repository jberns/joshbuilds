const links = [
  { name: 'Products', target: '/' },
  { name: 'Sell', target: '/' },
  { name: 'Orders', target: '/' },
  { name: 'Account', target: '/' },
  { name: 'Sign Out', target: '/' },
  { name: 'My Cart', target: '/' },
];

export const Header = () => {
  return (
    <header className="border-b border-sick-black">
      <div className="flex flex-col items-center pl-6 border-b-[10px] border-sick-black xl:flex-row xl:items-stretch">
        <h1 className="inline-block p-2 my-7 text-[40px] text-white uppercase bg-sick-red transform skew-x-[-7deg]">
          <a className="hover:underline" href="">
            Slick Fits
          </a>
        </h1>
        <nav className="flex flex-wrap justify-center flex-1 my-4 xl:my-0 xl:justify-end">
          {links.map((link) => (
            <a
              className="relative flex items-center flex-shrink-0 px-4 text-sm uppercase group xl:text-xl xl:px-8 lg:text-lg lg:px-6"
              key={link.name}
              href={link.target}
            >
              <span className="absolute top-0 left-0 w-0.5 h-full bg-gray-200 transform skew-x-[-20deg]"></span>
              <span className="relative">
                {link.name === 'My Cart' ? (
                  <span className="flex items-center space-x-2">
                    <span>{link.name}</span>
                    <span className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-sick-red">
                      1
                    </span>
                  </span>
                ) : (
                  link.name
                )}
                <span className="absolute left-0 w-full h-1 transition duration-500 transform scale-x-0 rounded-sm group-hover:scale-x-100 -bottom-1 bg-sick-red ease-sick-bloop"></span>
              </span>
            </a>
          ))}
        </nav>
      </div>
      <input
        className="w-full h-16 px-4"
        type="text"
        placeholder="Search for an item..."
      />
    </header>
  );
};
