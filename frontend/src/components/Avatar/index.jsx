import React from "react";

const Avatar = ({ img, name }) => {
  return (
    <div
      className="bg-red-500 w-10 h-10 rounded-full flex items-center justify-center uppercase font-bold"
      style={{
        backgroundImage: `url("${img}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {!img && (
        <>
          {
            //agar rasm yo'q bo'lsa ism familyasining bosh harflarini chiqarish uchun
            name?.split(" ").map((itm, idx) => (
              <span key={idx}>
                {itm[0] /* ism va familiyaning bosh harflari */}
              </span>
            ))
          }
        </>
      )}
    </div>
  );
};

export default Avatar;
