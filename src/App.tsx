const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="box-border flex w-screen h-screen bg-black border-2 text-cyan-600 border-cyan-200">
    {children}
  </div>
);

const Hello = () => (
  <div className="grid text-5xl place-items-center w-full h-full">
    <div>Hello</div>
  </div>
);

const App = () => {
  return (
    <PageWrapper>
      <Hello />
    </PageWrapper>
  );
};

export default App;
