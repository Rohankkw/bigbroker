import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalculator, FaPercent, FaCalendar, FaRupeeSign } from "react-icons/fa";

export default function EMICalculator() {
  const [principal, setPrincipal] = useState(3000000);
  const [rateOfInterest, setRateOfInterest] = useState(7.5);
  const [tenureYears, setTenureYears] = useState(20);

  // EMI Calculation Formula: EMI = [P x R x (1+R)^N] / [(1+R)^N-1]
  // Where P = Principal, R = Monthly Interest Rate, N = Number of Months
  const monthlyRate = rateOfInterest / 100 / 12;
  const numberOfMonths = tenureYears * 12;
  
  let emi = 0;
  let totalPayable = 0;
  let totalInterest = 0;

  if (monthlyRate === 0) {
    emi = principal / numberOfMonths;
    totalPayable = principal;
    totalInterest = 0;
  } else {
    const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths);
    const denominator = Math.pow(1 + monthlyRate, numberOfMonths) - 1;
    emi = numerator / denominator;
    totalPayable = emi * numberOfMonths;
    totalInterest = totalPayable - principal;
  }

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return (value / 10000000).toFixed(2) + " Cr";
    }
    if (value >= 100000) {
      return (value / 100000).toFixed(2) + " L";
    }
    return "₹ " + value.toLocaleString("en-IN");
  };

  return (
    <section id="emi-calculator" className="py-24 max-w-7xl mx-auto px-5 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <div className="label-mono text-brand-gold mb-3 flex items-center justify-center gap-2">
          <FaCalculator /> EMI CALCULATOR
        </div>
        <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
          Calculate Your <span className="text-brand-gold">Home Loan EMI</span>
        </h2>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
          Get instant EMI calculations for your dream property. Plan your finances with our easy-to-use calculator.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid lg:grid-cols-2 gap-12"
      >
        {/* Calculator Inputs */}
        <div className="bg-card-dark border border-border-dark rounded-2xl p-8">
          <div className="space-y-8">
            {/* Loan Amount */}
            <div>
              <label className="flex items-center gap-2 font-display font-bold text-lg mb-4">
                <FaRupeeSign className="text-brand-gold" /> Loan Amount
              </label>
              <div className="flex items-center gap-4 mb-2">
                <input
                  type="range"
                  min="500000"
                  max="50000000"
                  step="100000"
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="flex-1 accent-brand-gold"
                />
              </div>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2 text-foreground font-mono text-sm focus:outline-none focus:border-brand-gold"
              />
              <div className="text-xs text-foreground/60 mt-2">₹ 5 Lakh - ₹ 5 Crore</div>
            </div>

            {/* Rate of Interest */}
            <div>
              <label className="flex items-center gap-2 font-display font-bold text-lg mb-4">
                <FaPercent className="text-brand-gold" /> Rate of Interest (% p.a.)
              </label>
              <div className="flex items-center gap-4 mb-2">
                <input
                  type="range"
                  min="3"
                  max="12"
                  step="0.1"
                  value={rateOfInterest}
                  onChange={(e) => setRateOfInterest(Number(e.target.value))}
                  className="flex-1 accent-brand-gold"
                />
              </div>
              <input
                type="number"
                value={rateOfInterest}
                onChange={(e) => setRateOfInterest(Number(e.target.value))}
                step="0.1"
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2 text-foreground font-mono text-sm focus:outline-none focus:border-brand-gold"
              />
              <div className="text-xs text-foreground/60 mt-2">3% - 12% per annum</div>
            </div>

            {/* Loan Tenure */}
            <div>
              <label className="flex items-center gap-2 font-display font-bold text-lg mb-4">
                <FaCalendar className="text-brand-gold" /> Loan Tenure (Years)
              </label>
              <div className="flex items-center gap-4 mb-2">
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="flex-1 accent-brand-gold"
                />
              </div>
              <input
                type="number"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2 text-foreground font-mono text-sm focus:outline-none focus:border-brand-gold"
              />
              <div className="text-xs text-foreground/60 mt-2">5 - 30 years</div>
            </div>
          </div>
        </div>

        {/* Results Display */}
        <div className="space-y-6">
          {/* Main EMI Result */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 border border-brand-gold/30 rounded-2xl p-8"
          >
            <div className="text-foreground/60 text-sm font-mono mb-2">Monthly EMI</div>
            <div className="text-5xl font-bold text-brand-gold mb-2">
              ₹ {Math.round(emi).toLocaleString("en-IN")}
            </div>
            <div className="text-foreground/80 text-sm">
              Per month for {tenureYears} years
            </div>
          </motion.div>

          {/* Breakdown Cards */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="bg-card-dark border border-border-dark rounded-xl p-6"
            >
              <div className="text-foreground/60 text-xs font-mono mb-2">Principal Amount</div>
              <div className="text-2xl font-bold text-foreground">
                {formatCurrency(principal)}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card-dark border border-border-dark rounded-xl p-6"
            >
              <div className="text-foreground/60 text-xs font-mono mb-2">Total Interest</div>
              <div className="text-2xl font-bold text-brand-gold">
                {formatCurrency(totalInterest)}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="bg-card-dark border border-border-dark rounded-xl p-6"
            >
              <div className="text-foreground/60 text-xs font-mono mb-2">Total Payable</div>
              <div className="text-2xl font-bold text-foreground">
                {formatCurrency(totalPayable)}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card-dark border border-border-dark rounded-xl p-6"
            >
              <div className="text-foreground/60 text-xs font-mono mb-2">Total Months</div>
              <div className="text-2xl font-bold text-foreground">
                {numberOfMonths} months
              </div>
            </motion.div>
          </div>

          {/* Disclaimer */}
          <div className="bg-background-dark border border-border-dark rounded-xl p-4">
            <p className="text-xs text-foreground/60">
              <span className="text-brand-gold font-semibold">💡 Disclaimer:</span> This is an approximate EMI calculation. Actual EMI may vary based on bank policies, processing fees, and other charges. Please consult with our agents or banks for exact figures.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
