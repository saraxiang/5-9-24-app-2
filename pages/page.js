import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center min-h-screen p-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="card bg-white shadow-card rounded-card p-4">
            <div className="card-front bg-card-front rounded-card p-4">test1</div>
            <div className="card-back bg-card-back rounded-card p-4">test2</div>
          </div>
          <div className="card bg-white shadow-card rounded-card p-4">
            <div className="card-front bg-card-front rounded-card p-4">test3</div>
            <div className="card-back bg-card-back rounded-card p-4">test4</div>
          </div>
          <div className="card bg-white shadow-card rounded-card p-4">
            <div className="card-front bg-card-front rounded-card p-4">test5</div>
            <div className="card-back bg-card-back rounded-card p-4">test6</div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
