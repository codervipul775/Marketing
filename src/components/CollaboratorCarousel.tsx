
const logos = [
  'https://media.licdn.com/dms/image/v2/C4E0BAQFh3inqhmvjwA/company-logo_200_200/company-logo_200_200/0/1630630259001?e=2147483647&v=beta&t=9i30cprPVucw3gy6-y7JrjD6o-rnY22FxyO9Yd2wDzs',
  'https://media.licdn.com/dms/image/v2/D560BAQEmtIszb9OidA/company-logo_200_200/company-logo_200_200/0/1737119074651/startupnewsfyi_logo?e=2147483647&v=beta&t=01d8b0rHXtE0joI3litPBRC9EQGm1amHmgcRBI-Txr0',
  'https://dfocupmdlnlkc.cloudfront.net/public/cd21575e-49f5-4b14-9688-919f66e1a781_logo_500x200_trim.png',
  'https://upload.wikimedia.org/wikipedia/commons/6/68/Pepsi_2023.svg',
  'https://exchange4media.gumlet.io/news-photo/130458-BELLAVITA1.jpg',
  'https://www.zingbus.com/blog/wp-content/uploads/2022/04/Logo-1-2-3.png',
  'https://media-hosting.imagekit.io//b203b7ff7d90407d/Screenshot%202025-03-12%20at%207.07.44%E2%80%AFPM.png?Expires=1836394689&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cMuQzkO~yfgo7gpHEThK-YWS7erXr6Q~amnvJOGi0aj-tXlvBBuBwC6VRESfK0YF5J7ys0Z90M469d9HTvXgDSOyT97TKTALOyPLRk8G1-ivN0N-TEm67ssY7cdzR7~eKXA4p1uo09895Vk4C8m8OdMpN48ON6GcOq~G7WrRT7lnxeRzW9VhHmZCgOfaD0lI5q~tHn8iKqH3eTN5or16G7lyaTc4SOd8w83yAVW36kA~UCnMuioW6TGvKB0drKIxE7ciVov0j5G19kqLWW4qR2re1LbHxk~Jp2zE00KWnBN-3dOjLK8fdH364jqve5tu3oAAEDfH-OdvjLGJs62vyA__',
  'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/KitKat_logo.svg/2560px-KitKat_logo.svg.png',
  "https://img-cdn.thepublive.com/fit-in/1200x675/entrackr/media/media_files/2025/02/07/MJ2nzc6Yf3HfE2MOnjJe.png",
  "https://mir-s3-cdn-cf.behance.net/projects/404/2b9b50195309425.Y3JvcCw5NjYsNzU2LDMxLDE1Mw.png"
];

const CollaboratorCarousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-track">
        {logos.map((logo, index) => (
          <div className="carousel-item" key={index}>
            <img src={logo} alt={`Collaborator ${index + 1}`} className="h-16 gap-2" />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div className="carousel-item" key={index + logos.length}>
            <img src={logo} alt={`Collaborator ${index + 1}`} className="h-16 gap-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaboratorCarousel;