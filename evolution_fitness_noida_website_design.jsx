export default function EvolutionFitnessWebsite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-zinc-900 to-red-900 py-24 px-6 text-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/videos/workout.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            EVOLUTION FITNESS
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8">
            Transform Your Body. Transform Your Life.
          </p>
          <p className="text-lg text-zinc-400 mb-10">
            Sector 121 Noida | Personal Training | Couple Plans | Fat Loss | Muscle Gain
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl text-lg font-bold shadow-lg transition-all">
              Join Now
            </button>
            <button className="border border-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-black transition-all">
              View Plans
            </button>
          </div>
        </div>
      </div>
      </section>

      {/* Male & Female Workout Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
              alt="Male Workout"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-6">
              <h3 className="text-3xl font-bold text-white">Strength Training</h3>
              <p className="text-zinc-300 mt-2">
                Build muscle, increase strength, and transform your physique.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop"
              alt="Male Female Workout Together"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-6">
              <h3 className="text-3xl font-bold text-white">Couple Workout</h3>
              <p className="text-zinc-300 mt-2">
                Train together with motivating couple fitness sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-red-500">About Us</h2>
            <p className="text-zinc-300 leading-8 text-lg">
              Evolution Fitness is a premium gym located in Sector 121 Noida focused on body transformation, strength training, weight loss, muscle gain, and personal fitness coaching.
            </p>
            <p className="text-zinc-400 mt-6 leading-8">
              We provide modern equipment, certified trainers, personalized workout plans, nutrition guidance, and a motivating environment for every fitness level.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 shadow-2xl border border-zinc-800">
            <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
            <ul className="space-y-4 text-zinc-300 text-lg">
              <li>✔ Modern Gym Equipment</li>
              <li>✔ Certified Personal Trainers</li>
              <li>✔ Affordable Membership Plans</li>
              <li>✔ Couple & Transformation Plans</li>
              <li>✔ Diet & Workout Guidance</li>
              <li>✔ Friendly Environment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-500 mb-14">Membership Plans</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: '1 Month', price: '₹1500' },
              { title: '3 Months', price: '₹4000' },
              { title: '6 Months', price: '₹7000' },
              { title: '1 Year', price: '₹13000' },
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:scale-105 transition-all shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-4xl font-extrabold text-red-500 mb-6">{plan.price}</p>
                <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-bold w-full">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Couple Plan */}
      <section className="py-20 px-6 bg-zinc-950 text-center">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-red-700 to-red-900 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-5xl font-extrabold mb-6">Couple Plan ❤️</h2>
          <p className="text-xl text-zinc-100 leading-8 mb-8">
            Train together, stay motivated together. Special discounts available for couples.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-all">
            Join Couple Plan
          </button>
        </div>
      </section>

      {/* BMI Calculator */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto bg-zinc-900 p-10 rounded-3xl border border-zinc-800 shadow-xl">
          <h2 className="text-4xl font-bold text-center text-red-500 mb-10">
            BMI Calculator
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="number"
              placeholder="Enter Weight (kg)"
              className="bg-zinc-800 p-4 rounded-xl outline-none"
            />
            <input
              type="number"
              placeholder="Enter Height (cm)"
              className="bg-zinc-800 p-4 rounded-xl outline-none"
            />
          </div>

          <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl mt-8 w-full font-bold text-lg">
            Calculate BMI
          </button>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-500 mb-14">Expert Trainers</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((trainer) => (
              <div
                key={trainer}
                className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-xl"
              >
                <div className="h-44 bg-zinc-800 rounded-2xl mb-6"></div>
                <h3 className="text-2xl font-bold mb-2">Certified Trainer</h3>
                <p className="text-zinc-400">Strength • Fat Loss • Transformation</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Gallery */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-500 mb-14">Transformation Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1,2,3,4,5,6,7,8].map((item) => (
              <div
                key={item}
                className="bg-zinc-800 rounded-2xl h-52 hover:scale-105 transition-all"
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Joining Form */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto bg-zinc-900 rounded-3xl p-10 border border-zinc-800 shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-red-500 mb-10">
            Join Evolution Fitness
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" className="bg-zinc-800 p-4 rounded-xl outline-none" />
            <input type="number" placeholder="Phone Number" className="bg-zinc-800 p-4 rounded-xl outline-none" />
            <input type="email" placeholder="Email Address" className="bg-zinc-800 p-4 rounded-xl outline-none" />
            <select className="bg-zinc-800 p-4 rounded-xl outline-none">
              <option>Select Plan</option>
              <option>1 Month</option>
              <option>3 Months</option>
              <option>6 Months</option>
              <option>1 Year</option>
              <option>Couple Plan</option>
            </select>
          </div>

          <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-bold text-lg w-full mt-8">
            Submit Registration
          </button>
        </div>
      </section>

      {/* Transformation Slider */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-500 mb-14">Client Transformations</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map((item) => (
              <div key={item} className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-xl hover:scale-105 transition-all">
                <div className="h-80 bg-zinc-800"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Amazing Result</h3>
                  <p className="text-zinc-400">Weight Loss • Muscle Gain • Fat Transformation</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Diet Calculator */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-red-800 to-black rounded-3xl p-10 shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-10">AI Diet Calculator</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input type="number" placeholder="Current Weight" className="bg-zinc-900 p-4 rounded-xl outline-none" />
            <input type="number" placeholder="Goal Weight" className="bg-zinc-900 p-4 rounded-xl outline-none" />
            <input type="number" placeholder="Height" className="bg-zinc-900 p-4 rounded-xl outline-none" />
            <select className="bg-zinc-900 p-4 rounded-xl outline-none">
              <option>Select Goal</option>
              <option>Fat Loss</option>
              <option>Muscle Gain</option>
              <option>Weight Gain</option>
            </select>
          </div>

          <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg mt-8 w-full">
            Generate Diet Plan
          </button>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 px-6 bg-zinc-950 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-red-500 mb-14">Instagram Feed</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1,2,3,4].map((item) => (
              <div key={item} className="h-72 rounded-3xl bg-zinc-800 hover:scale-105 transition-all shadow-xl"></div>
            ))}
          </div>

          <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-bold text-lg mt-10">
            Follow @evolutionfitness_noida
          </button>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-500 mb-10">Find Us</h2>

          <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl h-[450px] bg-zinc-900 flex items-center justify-center text-zinc-400 text-2xl">
            Google Map Integration Area
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-500 mb-8">Contact Us</h2>

          <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800 shadow-2xl">
            <p className="text-xl mb-4">
              📍 C1 4th Floor Sadbhawna Market Opp- Celo County Gate No-3 Sector 121 Noida
            </p>

            <p className="text-2xl font-bold text-red-500 mb-4">
              📞 7533072799
            </p>

            <p className="text-lg text-zinc-300 mb-8">
              Instagram: @evolutionfitness_noida
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold text-lg">
                WhatsApp Now
              </button>

              <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-bold text-lg">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-8 text-center text-zinc-500">
        <p>© 2026 Evolution Fitness Noida. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
