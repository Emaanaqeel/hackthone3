
export default function FilterSidebar() {
    return (
      <aside className="w-64 bg-white rounded-lg shadow p-4 space-y-6">
        <section>
          <h3 className="font-semibold mb-2">Type</h3>
          {['Sport', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback'].map((type) => (
            <label key={type} className="block">
              <input type="checkbox" className="mr-2" />
              {type}
            </label>
          ))}
        </section>
        
        <section>
          <h3 className="font-semibold mb-2">Capacity</h3>
          {['2 Person', '4 Person', '6 Person', '8 or More'].map((capacity) => (
            <label key={capacity} className="block">
              <input type="checkbox" className="mr-2" />
              {capacity}
            </label>
          ))}
        </section>
        
        <section>
          <h3 className="font-semibold mb-2">Price</h3>
          <input type="range" min="0" max="100" className="w-full" />
          <p className="text-sm mt-2">Max: $100.00</p>
        </section>
      </aside>
    );
  }