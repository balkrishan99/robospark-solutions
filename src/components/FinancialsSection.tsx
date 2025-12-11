import { TrendingUp, DollarSign, Users, Target } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const revenueData = [
  { year: "2024", revenue: 0.8, units: 25 },
  { year: "2025", revenue: 8.5, units: 250 },
  { year: "2026", revenue: 28, units: 750 },
  { year: "2027", revenue: 65, units: 1500 },
  { year: "2028", revenue: 120, units: 2800 },
];

const revenueBreakdown = [
  { name: "Hardware Sales", value: 60, color: "hsl(var(--primary))" },
  { name: "SaaS Subscriptions", value: 30, color: "hsl(142, 76%, 36%)" },
  { name: "Services & Support", value: 10, color: "hsl(45, 93%, 47%)" },
];

const marketMetrics = [
  { metric: "TAM", value: "$45B", description: "Total Addressable Market" },
  { metric: "SAM", value: "$12B", description: "Serviceable Addressable Market" },
  { metric: "SOM", value: "$1.2B", description: "Serviceable Obtainable Market" },
];

const fundingUse = [
  { category: "R&D & Engineering", percentage: 40 },
  { category: "Manufacturing Scale-up", percentage: 25 },
  { category: "Sales & Marketing", percentage: 20 },
  { category: "Operations & Support", percentage: 15 },
];

const FinancialsSection = () => {
  return (
    <section id="financials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Investment Opportunity
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Financial <span className="text-primary">Projections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our path to $120M ARR by 2028 with proven unit economics
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <DollarSign className="w-6 h-6" />, label: "Series A Target", value: "$15M", sub: "Current Round" },
            { icon: <TrendingUp className="w-6 h-6" />, label: "5-Year Revenue", value: "$120M", sub: "2028 Projection" },
            { icon: <Users className="w-6 h-6" />, label: "Unit Economics", value: "3.2x", sub: "LTV:CAC Ratio" },
            { icon: <Target className="w-6 h-6" />, label: "Gross Margin", value: "68%", sub: "At Scale" },
          ].map((metric, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 border border-border text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                {metric.icon}
              </div>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="text-3xl font-bold text-primary">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Revenue Growth Chart */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="text-xl font-bold mb-6">Revenue Growth Projection</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(v) => `$${v}M`} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number) => [`$${value}M`, "Revenue"]}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  fill="url(#revenueGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue Breakdown */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="text-xl font-bold mb-6">Revenue Mix (2028)</h3>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={revenueBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${value}%`}
                    labelLine={false}
                  >
                    {revenueBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              {revenueBreakdown.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Market Size */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="text-xl font-bold mb-6">Market Opportunity</h3>
            <div className="space-y-6">
              {marketMetrics.map((item, i) => (
                <div key={i} className="relative">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-semibold">{item.metric}</span>
                    <span className="text-2xl font-bold text-primary">{item.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: i === 0 ? "100%" : i === 1 ? "27%" : "10%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Use of Funds */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="text-xl font-bold mb-6">Use of Funds ($15M)</h3>
            <div className="space-y-4">
              {fundingUse.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.category}</span>
                    <span className="font-semibold">{item.percentage}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Runway: <span className="font-semibold text-foreground">24 months</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Break-even: <span className="font-semibold text-foreground">Q2 2026</span>
              </p>
            </div>
          </div>

          {/* Unit Sales */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="text-xl font-bold mb-6">Unit Sales Forecast</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number) => [value, "Units"]}
                />
                <Bar dataKey="units" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                CAGR: <span className="font-bold text-primary">156%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialsSection;
