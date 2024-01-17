interface Props {
  closeOverlay: () => void;
}

const DarkOverlay = ({ closeOverlay }: Props) => {
  return (
    <div
      className="bg-black/50 overflow-y-hidden w-screen h-screen absolute top-0 left-0 z-30"
      onClick={() => closeOverlay()}
    ></div>
  );
};

export default DarkOverlay;
