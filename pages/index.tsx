import GradientLayout from '../components/graidentLayout';

const Home = () => {
  return (
    <GradientLayout
      color="red"
      subTitle="profile"
      title="H User"
      description="15 public playlists"
      image="/profile-picture.png"
      roundImage
    />
  );
};

export default Home;
