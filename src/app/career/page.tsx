"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Send,
  Upload,
  CheckCircle2,
  Clock3,
  Loader2,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

import WorkTogether from "@/components/sections/WorkTogether";

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const heroImageEffect: Variants = {
  hidden: { scale: 1.15, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.8, ease: "easeOut" },
  },
};

// --- Job Data ---
const jobData = [
  { id: 1, title: "Senior Marketing Manager", department: "Sales & Marketing", location: "Colombo, SL", type: "Full-time" },
  { id: 2, title: "Financial Analyst", department: "Finance", location: "Remote", type: "Full-time" },
  { id: 3, title: "Customer Support Specialist", department: "Customer Service", location: "Colombo, SL", type: "Part-time" },
  { id: 4, title: "Logistics Coordinator", department: "Operations", location: "Galle, SL", type: "Full-time" },
  { id: 5, title: "HR Generalist", department: "Human Resources", location: "Colombo, SL", type: "Full-time" }
];

const categories = ["All", "Sales & Marketing", "Customer Service", "Procurement", "Operations", "Human Resources", "Finance"];

export default function CareerPage() {
  const [filter, setFilter] = useState("All");
  const [selectedJob, setSelectedJob] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSending, setIsSending] = useState(false);

  const filteredJobs = filter === "All" 
      ? jobData 
      : jobData.filter(job => job.department === filter);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        toast.error("Please upload a PDF file only.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) { 
        toast.error("File size is too large (Max 5MB).");
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullName = formData.get("fullName")?.toString().trim();

    if (!fullName || fullName.length < 3) {
      toast.error("Please enter a valid full name.");
      return;
    }
    if (!selectedJob) {
      toast.error("Please select a position.");
      return;
    }
    if (!selectedFile) {
      toast.error("Please upload your CV (PDF).");
      return;
    }

    setIsSending(true);

    try {
      formData.set("position", selectedJob);
      formData.set("file", selectedFile);

      const res = await fetch("/api/send", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("Thank you! Your application has been sent.");
        form.reset();
        setSelectedJob("");
        setSelectedFile(null);
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="overflow-hidden bg-white">
      <Toaster position="top-right" reverseOrder={false} />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-slate-950">
        <motion.div initial="hidden" animate="visible" variants={heroImageEffect} className="absolute inset-0 z-0">
          <Image src="/images/hero/about.webp" alt="TranscoCargo Careers" fill priority className="object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.9)_0%,rgba(15,23,42,0.7)_50%,rgba(15,23,42,0.4)_100%)]" />
        </motion.div>

        <div className="relative z-10 container-page px-6 flex h-full items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20] backdrop-blur-sm">
              Careers
            </motion.div>
            <motion.h1 variants={fadeInUp} className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
              Join Our Team & <br /> Grow With Us
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              We are looking for passionate individuals to help us redefine logistics. Explore our open roles and start your journey with TranscoCargo.
            </motion.p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 container-page bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative group">
              <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image src="/images/career/career.webp" alt="Work Culture" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-white font-black text-2xl tracking-tight">Collaborative. <br /> Innovative. Driven.</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-full w-full border-2 border-[#F47B20] rounded-[2.5rem] -z-10" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div>
                <h2 className="text-[#F47B20] font-bold uppercase tracking-[0.2em] text-sm">Work Life</h2>
                <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mt-4 leading-[1.1]">More than just a job, <br /> It s a community.</h3>
                <p className="text-slate-600 mt-6 text-lg leading-relaxed">We provide a flexible work environment that empowers you to work freely while offering maximum support.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Modern Workspace", desc: "State-of-the-art office environment." },
                  { title: "Health & Wellness", desc: "Your health is our top priority." },
                  { title: "Growth Path", desc: "Continuous training and advancement." },
                  { title: "Team Outings", desc: "Engaging team-building activities." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="bg-orange-100 p-2 rounded-lg text-[#F47B20]"><CheckCircle2 size={20} /></div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- JOBS & APPLICATION SECTION --- */}
      <section className="py-24 container-page mx-auto px-6">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-[#F47B20] font-bold uppercase tracking-[0.2em] text-sm block mb-4">Current Openings</span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900">Find Your Next Challenge</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Job List */}
          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
                    filter === cat ? "bg-[#F47B20] border-[#F47B20] text-white shadow-lg shadow-orange-200" : "bg-white text-slate-600 border-slate-200 hover:border-[#F47B20] hover:text-[#F47B20]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <motion.div layout className="grid gap-6">
              {filteredJobs.map((job) => (
                <motion.div layout key={job.id} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row justify-between items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#F47B20] transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-6 mt-3 text-slate-500 text-sm">
                      <span className="flex items-center gap-2"><Briefcase size={16} className="text-[#F47B20]" /> {job.department}</span>
                      <span className="flex items-center gap-2"><MapPin size={16} className="text-[#F47B20]" /> {job.location}</span>
                      <span className="flex items-center gap-2"><Clock3 size={16} className="text-[#F47B20]" /> {job.type}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => { setSelectedJob(job.title); window.scrollTo({ top: 1200, behavior: 'smooth' }); }}
                    className="bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#F47B20] transition-all"
                  >
                    Quick Apply
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-4">
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 sticky top-24">
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <Send className="text-[#F47B20]" /> Apply Now
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Full Name</label>
                  <input name="fullName" type="text" disabled={isSending} placeholder="Enter your name" className="w-full px-5 py-4 rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-[#F47B20] outline-none disabled:opacity-50 transition-all" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Applying Position</label>
                  <select 
                    value={selectedJob} 
                    onChange={(e) => setSelectedJob(e.target.value)} 
                    name="position"
                    disabled={isSending}
                    className="w-full px-5 py-4 rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-[#F47B20] outline-none disabled:opacity-50"
                  >
                    <option value="">Select a position</option>
                    {jobData.map(job => <option key={job.id} value={job.title}>{job.title}</option>)}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Your CV</label>
                  <div className={`relative border-2 border-dashed rounded-2xl p-6 text-center transition-all bg-white/50 ${selectedFile ? 'border-green-500' : 'border-slate-200 hover:border-[#F47B20]'}`}>
                    {isSending ? <Loader2 className="mx-auto mb-2 text-slate-300 animate-spin" size={24} /> : <Upload className={`mx-auto mb-2 ${selectedFile ? 'text-green-500' : 'text-slate-300'}`} size={24} />}
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                      {selectedFile ? <span className="text-[#F47B20] lowercase font-medium text-sm">{selectedFile.name}</span> : "Upload PDF (Max 5MB)"}
                    </span>
                    <input type="file" name="file" disabled={isSending} className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf" onChange={handleFileChange} />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSending}
                  className="w-full bg-[#F47B20] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-900 shadow-xl shadow-orange-100 transition-all flex items-center justify-center gap-3 mt-4 disabled:bg-slate-400 disabled:cursor-not-allowed"
                >
                  {isSending ? <>Sending... <Loader2 className="animate-spin" size={20} /></> : <>Send Application <CheckCircle2 size={20} /></>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <WorkTogether />
    </main>
  );
}