export default function Footer() {
  const dynamicDate = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 h-16">
      <div className="h-full px-2">
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-400">
            &copy; {dynamicDate} JunkFree, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
