import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header className="fixed top-0 left-0 right-0 z-10" />
      <div className="flex flex-1">
        <Sidebar className="fixed left-0 top-16 bottom-0 bg-gray-100 border-r border-gray-200 overflow-y-auto" />
        <main className="flex-1 w-full p-4 overflow-y-auto flex justify-center items-center">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
