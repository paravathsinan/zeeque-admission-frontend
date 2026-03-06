"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { submitEnquiry } from "@/app/actions";
import {
    CheckCircle2,
    User,
    MapPin,
    Phone,
    Calendar,
    ChevronDown,
} from "lucide-react";

const formSchema = z.object({
    childName: z
        .string()
        .min(3, "Please enter your child's full name."),
    dobDay: z
        .string()
        .min(1, "Please select a day."),
    dobMonth: z
        .string()
        .min(1, "Please select a month."),
    dobYear: z
        .string()
        .min(1, "Please select a year."),
    place: z
        .string()
        .min(2, "Please enter your city or area."),
    schoolPreference1: z
        .string()
        .min(1, "Please select the 1st school preference."),
    schoolPreference2: z
        .string()
        .optional(),
    countryCode: z
        .string()
        .min(1, "Select a country code."),
    whatsappNumber: z
        .string()
        .min(10, "Enter a valid WhatsApp number.")
        .max(15, "WhatsApp number is too long."),
});

type FormData = z.infer<typeof formSchema>;

const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, "0"));

const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
];

const years = Array.from({ length: 10 }, (_, i) => String(new Date().getFullYear() - i));

const schools = [
    "AIES ZeeQue Preschool Kondotty",
    "Ainul Huda ZeeQue Preschool Keezhmadam",
    "Al - Basmala ZeeQue Preschool Nekkila",
    "Al Furqan ZeeQue Preschool Wandoor",
    "Al Huda ZeeQue Preschool Kadampuzha",
    "Al Madeena ZeeQue Preschool Manjanade",
    "Al Mafas ZeeQue Preschool Moodibiri",
    "Al Qadisia ZeeQue Preschool Kavalkatte",
    "Al- Ihsan ZeeQue Preschool Kalpeni",
    "Al- Qadisa ZeeQue Preschool Adiyar Kannur",
    "Alathor Markaz ZeeQue Preschool",
    "Algebra Global ZeeQue Preschool Koppam",
    "Alif Global International ZeeQue Preschool MKC",
    "Alif Kindergarten ZeeQue Preschool Vadakkanchery",
    "Alif ZeeQue Preschool Chetlat",
    "Apex ZeeQue Preschool Varam",
    "Assaquafa ZeeQue Preschool Kadamath",
    "Ayyoobi ZeeQue Preschool Padinjarangadi",
    "Azeezia ZeeQue Preschool Madavana",
    "Badriyya ZeeQue Preschool Nediyanad",
    "Badrul Huda ZeeQue Preschool Varanakkara",
    "Baqiyath ZeeQue Preschool Kavaratti North",
    "Bliss Mountain ZeeQue Preschool Ullal",
    "CM City Kids ZeeQue Preschool Nallalam",
    "Edan Global ZeeQue Preschool Belandoor",
    "Edukites ZeeQue Preschool  Saudi Arabia",
    "Ek Mohammed Darimi Usthad ZeeQue Preschool Keralapuram",
    "Falah Green Vally ZeeQue Preschool Kalpatta",
    "Garden Valley ZeeQue Preschool Karunagappally",
    "Garden Vally ZeeQue Preschool Panmana",
    "Gazzali Garden ZeeQue Preschool Thirthahalli",
    "Guidance ZeeQue Preschool Thiruvambady",
    "Hidaya Garden ZeeQue Preschool Muttannur",
    "Hidaya ZeeQue Preschool Kombam",
    "Hidaya ZeeQue Preschool Palazhi",
    "ICS ZeeQue Preschool SasthamCotta",
    "Insight ZeeQuePreschool Thathamangalam",
    "Irshad ZeeQue Preschool Panthavoor",
    "Irshadiyya ZeeQue Preschool Kolathur",
    "Izzathul Islam ZeeQue Preschool Moonniyur",
    "KEMS ZeeQue Preschool manjeri",
    "Kings & Queens ZeeQue Preschool, Kaipamangalam",
    "Ma'din Knowledge Garden ZeeQue Prechool South Punnayur",
    "Madar ZeeQue Preschool Vadanappally",
    "Madeena Makhoom ZeeQue Preschool Virippadam",
    "Majlis Edupark ZeeQue Preschool Mudipu",
    "Majlis ZeeQue Preschool Uliyil",
    "Makhdoomiyya Garden ZeeQue Preschool Vailathur",
    "Makhdoomiyya ZeeQue Preschool Ponnani",
    "Malhar She Garden ZeeQue Preschool Manjeshwar",
    "Manshau ZeeQue Preschool Mattool",
    "Markaz Al Munawara ZeeQue Preschool Manappally",
    "Markaz Riviera ZeeQue Preschool Muvattuppuzha",
    "Markaz Thaeleemul Ihsan ZeeQue Preschool Muloor",
    "Markaz Zahra ZeeQue Preschool Sharjah",
    "Markaz ZeeQue Preschool Andrott",
    "Markaz ZeeQue Preschool Calicut, Andaman and Nicobar Islands",
    "Markaz ZeeQue Preschool Kaikamba",
    "Markaz ZeeQue Preschool Kavaratti Central",
    "Markaz ZeeQue Preschool Klari",
    "Markaz ZeeQue Preschool Paruthikkuzhi",
    "Markaz ZeeQue Preschool Puthur Panoor",
    "Markaz ZeeQue Preschool Wimberly Gunj Andaman and Nicobar Islands",
    "Markazu Swahaba ZeeQue Preschool Calicut",
    "Markazul Abrar ZeeQue Preschool Mannarkkad",
    "Markazul Hidaya ZeeQue Preschool Kotekar",
    "Markazul Hidaya ZeeQue Preschool Kottamudi",
    "Markazul Irshadiyya ZeeQue Preschool Palliparamba",
    "Mayyalaviyya ZeeQue Preschool Mahe",
    "MDI ZeeQue Preschool Kallidukk",
    "MDI ZeeQue Preschool Karulai",
    "MEMS ZeeQue Preschool Karanthur",
    "MES ZeeQue Preschool Amini",
    "MET ZeeQue Preschool Tirur",
    "Minhaj Edu Park ZeeQue Preschool Kuniya",
    "MIS ZeeQue Preschool Eranhipaalam",
    "Misbah Zahra Garden ZeeQue Preschool Chaliyam",
    "Misbah ZeeQue Preschool Katipalla",
    "MJM ZeeQue Preschool Bajpe",
    "MJS ZeeQue Preschool Mouloodpura",
    "MJS ZeeQue Preschool Nettor",
    "MJS ZeeQue Preschool Vidakuzha",
    "MPS ZeeQue Preschool Aikkarappadi",
    "MPS ZeeQue Preschool Ar Nagar",
    "MPS ZeeQue Preschool Balussery",
    "MPS ZeeQue Preschool Koyilandy",
    "MTS ZeeQue Preschool Padanthorai",
    "Mueeniya ZeeQue Preschool Kakkur",
    "Muhammed Irfan ZeeQue Preschool, Mannar",
    "Mujammau ZeeQue Preschool Thrikaripur",
    "Naqshabandhi Garden ZeeQue Preschool Tanur",
    "Nice ZeeQue Preschool Chelembra",
    "Olive ZeeQue Preschool Kilthan Island",
    "Orange ZeeQue Preschool Kizhishery",
    "Pearls And Petals ZeeQue Preschool Muthuvammal",
    "Quaf ZeeQue Preschool Naduvannur",
    "Roulathul Athfaal Zeeque Preschool Bandiyod",
    "Safa Marva ZeeQue Preschool Honnavar",
    "Safara ZeeQue Preschool Kooriyad",
    "Salama Park ZeeQue Preschool Venkitang",
    "Swahaba Kids Zone ZeeQue Preschool Kaithappoyil",
    "Thajul Ulama ZeeQue Preschool Chiramanangad",
    "Thajul Ulama ZeeQue Preschool Derlaketta",
    "Thanveerul Islam ZeeQue Preschool Agathi",
    "Thaqwa Academy Of Islamic Education ZeeQue Preschool Pumpwell",
    "Thwaiba  ZeeQue Prschool Areekode",
    "Thwaiba ZeeQue Preschool Hospet",
    "Thwaiba ZeeQue Preschool Valliyad",
    "Umariyya Kinder Garden ZeeQue Preschool Fort Kochi",
    "Vadee Marwa ZeeQue Preschool  Ayiroor",
    "We Spark ZeeQue Preschool Edakkara",
    "Zahra Garden ZeeQue Preschool  Chengalayi",
    "Zahra Garden ZeeQue Preschool Saidarpalli",
    "Zahra Park ZeeQue Preschool Koduvally",
    "Zahra Park ZeeQue Preschool Old Beach",
    "Zain ZeeQue Preschool Kodinji",
    "ZeeQue Preschool Kayamkulam",
    "ZeeQue Preschool Pattar Nadakavu",
    "ZeeQue Preschool Poonoor",
    "ZeeQue Preschool Salalah, Oman",
    "ZeeQue Preschool, Pallimukku",
];

const countryCodes = [
    { code: "+91", label: "IN" },
    { code: "+971", label: "AE" },
    { code: "+966", label: "SA" },
    { code: "+968", label: "OM" },
    { code: "+974", label: "QA" },
    { code: "+965", label: "KW" },
    { code: "+973", label: "BH" },
];

function calculateProgress(values: FormData): number {
    let total = 0;
    let filled = 0;

    const requiredKeys: (keyof FormData)[] = [
        "childName",
        "dobDay",
        "dobMonth",
        "dobYear",
        "place",
        "schoolPreference1",
        "countryCode",
        "whatsappNumber",
    ];

    total = requiredKeys.length;

    requiredKeys.forEach((key) => {
        const value = values[key];
        if (typeof value === "string" && value.trim().length > 0) {
            filled += 1;
        }
    });

    const ratio = total === 0 ? 0 : filled / total;
    return Math.max(15, Math.min(100, Math.round(ratio * 100)));
}

interface CustomSelectProps {
    label: string;
    value: string;
    options: string[];
    onChange: (val: string) => void;
    error?: boolean;
    className?: string;
}

function CustomSelect({ label, value, options, onChange, error, className }: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={className || `flex items-center justify-between w-full rounded-xl border bg-white/80 dark:bg-white/5 px-2.5 py-2.5 text-sm shadow-sm outline-none transition-all backdrop-blur-sm
                ${error
                        ? "border-red-400/80 ring-2 ring-red-400/20"
                        : "border-gray-200/80 dark:border-white/10 hover:border-luxury-primary/50"
                    } ${isOpen ? "ring-2 ring-luxury-primary/40 border-luxury-primary/70" : ""}`}
            >
                <span className={value ? "text-foreground" : "text-gray-400 dark:text-gray-500"}>
                    {value || label}
                </span>
                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute z-50 mt-1.5 w-full max-h-48 overflow-y-auto rounded-xl border border-gray-200/80 dark:border-white/10 bg-white/95 dark:bg-[#1A1A1A]/95 backdrop-blur-md shadow-xl py-1 custom-scrollbar"
                        >
                            {options.map((opt) => (
                                <button
                                    key={opt}
                                    type="button"
                                    onClick={() => {
                                        onChange(opt);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full text-left px-3 py-2 text-sm transition-colors hover:bg-luxury-primary/10 hover:text-luxury-primary
                                    ${value === opt ? "bg-luxury-primary/5 text-luxury-primary font-semibold" : "text-foreground/80"}`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function EnquiryForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
        setValue,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: "onTouched",
        defaultValues: {
            countryCode: "+91",
        },
    });

    const watchedValues = watch();
    const progress = calculateProgress(watchedValues);

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const dob = `${data.dobYear}-${data.dobMonth}-${data.dobDay}`;

            const response = await submitEnquiry({
                ...data,
                dob,
            });

            if (response.success) {
                setIsSuccess(true);
                toast.success("Thank you! Our admissions team will contact you shortly.");
            } else {
                toast.error("Failed to submit enquiry. Please try again.");
            }
        } catch (error) {
            console.error("Submission error", error);
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const onError = () => {
        toast.error("Please fill in all mandatory fields before submitting.");
    };

    return (
        <section
            id="admission"
            className="py-14 md:py-16 bg-background relative overflow-hidden"
        >
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-luxury-primary/8 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-luxury-navy/8 dark:bg-luxury-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-4xl mx-auto px-[5vw] relative z-10">
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35 }}
                        className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-2"
                    >
                        Enquiry Form
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.08 }}
                        className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-lg mx-auto"
                    >
                        Take the first step toward academic excellence for your child.
                    </motion.p>
                </div>

                <div className="glass-card p-6 md:p-8 rounded-2xl border border-luxury-gold/15 dark:border-white/10 shadow-lg relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-soft-light">
                        <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-luxury-primary/30 to-luxury-gold/10 blur-2xl" />
                        <div className="absolute -bottom-20 -left-20 w-44 h-44 rounded-full bg-gradient-to-tr from-luxury-navy/30 to-luxury-primary/10 blur-2xl" />
                    </div>

                    {!isSuccess && (
                        <div className="mb-6 relative z-10">
                            <div className="flex items-center justify-between mb-1.5">
                                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-luxury-primary">
                                    Step 1 of 1
                                </span>
                                <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">
                                    {progress}% complete
                                </span>
                            </div>
                            <div className="h-1.5 rounded-full bg-gray-200/50 dark:bg-white/5 overflow-hidden">
                                <motion.div
                                    className="h-full rounded-full bg-gradient-to-r from-luxury-primary via-luxury-gold to-luxury-navy"
                                    initial={{ width: "15%" }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                />
                            </div>
                        </div>
                    )}

                    <AnimatePresence mode="wait">
                        {isSuccess ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                className="relative z-10 text-center py-10"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", damping: 12, stiffness: 140 }}
                                    className="w-16 h-16 bg-green-100/80 dark:bg-emerald-500/15 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_8px_32px_rgba(16,185,129,0.3)]"
                                >
                                    <CheckCircle2 className="w-8 h-8 text-emerald-500 dark:text-emerald-300" />
                                </motion.div>
                                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2">
                                    Thank you for your enquiry
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md mx-auto">
                                    Our admissions team will connect with you shortly on WhatsApp or phone.
                                </p>
                                <button
                                    onClick={() => {
                                        reset({ countryCode: "+91" });
                                        setIsSuccess(false);
                                    }}
                                    className="mt-6 px-6 py-2.5 rounded-full border border-luxury-primary text-luxury-primary hover:bg-luxury-primary hover:text-white transition-colors text-xs font-semibold tracking-wide"
                                >
                                    Submit another enquiry
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.28 }}
                                onSubmit={handleSubmit(onSubmit, onError)}
                                className="relative z-10 space-y-5"
                            >
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="md:col-span-2">
                                        <label className="flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 mb-1.5">
                                            <User className="h-3.5 w-3.5 mr-1.5 text-luxury-primary" />
                                            Child&apos;s Name
                                        </label>
                                        <div className="relative group">
                                            <input
                                                {...register("childName")}
                                                type="text"
                                                placeholder="Enter child's full name"
                                                className={`block w-full rounded-xl border bg-white/80 dark:bg-white/5 px-3.5 py-2.5 text-sm shadow-sm outline-none transition-all backdrop-blur-sm
                                                ${errors.childName
                                                        ? "border-red-400/80 focus:ring-2 focus:ring-red-400/60"
                                                        : "border-gray-200/80 dark:border-white/10 focus:border-luxury-primary/70 focus:ring-2 focus:ring-luxury-primary/40"
                                                    }`}
                                            />
                                            <motion.span
                                                initial={false}
                                                animate={{
                                                    opacity: errors.childName ? 1 : 0,
                                                    y: errors.childName ? 0 : -4,
                                                }}
                                                className="pointer-events-none absolute -bottom-5 left-1 text-xs text-red-500"
                                            >
                                                {errors.childName?.message}
                                            </motion.span>
                                        </div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 mb-1.5">
                                            <Calendar className="h-3.5 w-3.5 mr-1.5 text-luxury-primary" />
                                            Date of Birth
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {/* Custom Day Select */}
                                            <CustomSelect
                                                label="Day"
                                                value={watch("dobDay")}
                                                options={days}
                                                onChange={(val) => setValue("dobDay", val, { shouldValidate: true })}
                                                error={!!errors.dobDay}
                                            />
                                            {/* Custom Month Select */}
                                            <CustomSelect
                                                label="Month"
                                                value={watch("dobMonth")}
                                                options={months}
                                                onChange={(val) => setValue("dobMonth", val, { shouldValidate: true })}
                                                error={!!errors.dobMonth}
                                            />
                                            {/* Custom Year Select */}
                                            <CustomSelect
                                                label="Year"
                                                value={watch("dobYear")}
                                                options={years}
                                                onChange={(val) => setValue("dobYear", val, { shouldValidate: true })}
                                                error={!!errors.dobYear}
                                            />
                                        </div>
                                        {(errors.dobDay || errors.dobMonth || errors.dobYear) && (
                                            <p className="mt-1 text-xs text-red-500">
                                                Please select day, month and year.
                                            </p>
                                        )}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 mb-1.5">
                                            <MapPin className="h-3.5 w-3.5 mr-1.5 text-luxury-primary" />
                                            Place
                                        </label>
                                        <div className="relative">
                                            <input
                                                {...register("place")}
                                                type="text"
                                                placeholder="Enter your city / locality"
                                                className={`block w-full rounded-xl border bg-white/80 dark:bg-white/5 px-3.5 py-2.5 text-sm shadow-sm outline-none transition-all backdrop-blur-sm
                                                ${errors.place
                                                        ? "border-red-400/80 focus:ring-2 focus:ring-red-400/60"
                                                        : "border-gray-200/80 dark:border-white/10 focus:border-luxury-primary/70 focus:ring-2 focus:ring-luxury-primary/40"
                                                    }`}
                                            />
                                            {errors.place && (
                                                <p className="mt-1 text-xs text-red-500">
                                                    {errors.place.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 mb-1.5">
                                            <MapPin className="h-3.5 w-3.5 mr-1.5 text-luxury-primary" />
                                            School (1st Preference)
                                        </label>
                                        <CustomSelect
                                            label="Select first preference"
                                            value={watch("schoolPreference1")}
                                            options={schools}
                                            onChange={(val) => setValue("schoolPreference1", val, { shouldValidate: true })}
                                            error={!!errors.schoolPreference1}
                                        />
                                        {errors.schoolPreference1 && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {errors.schoolPreference1.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 mb-1.5">
                                            <MapPin className="h-3.5 w-3.5 mr-1.5 text-luxury-primary" />
                                            School (2nd Preference)
                                            <span className="ml-1.5 text-[10px] font-normal text-gray-400 uppercase tracking-[0.18em]">
                                                Optional
                                            </span>
                                        </label>
                                        <CustomSelect
                                            label="Select second preference (optional)"
                                            value={watch("schoolPreference2") || ""}
                                            options={schools}
                                            onChange={(val) => setValue("schoolPreference2", val, { shouldValidate: true })}
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 mb-1.5">
                                            <Phone className="h-3.5 w-3.5 mr-1.5 text-luxury-primary" />
                                            WhatsApp Number
                                        </label>
                                        <div className="flex rounded-xl border bg-white/80 dark:bg-white/5 border-gray-200/80 dark:border-white/10 overflow-hidden shadow-sm backdrop-blur-sm focus-within:border-luxury-primary/70 focus-within:ring-2 focus-within:ring-luxury-primary/40">
                                            <div className="relative border-r border-gray-200/80 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 min-w-[100px]">
                                                <CustomSelect
                                                    label="Select"
                                                    value={watch("countryCode")}
                                                    options={countryCodes.map(c => c.code)}
                                                    onChange={(val) => setValue("countryCode", val, { shouldValidate: true })}
                                                    // Special styling for country code to look like a prefix
                                                    className="border-none bg-transparent shadow-none ring-0 focus:ring-0"
                                                />
                                            </div>
                                            <input
                                                {...register("whatsappNumber")}
                                                type="tel"
                                                inputMode="tel"
                                                placeholder="Phone number"
                                                className="flex-1 bg-transparent px-3.5 py-2.5 text-sm outline-none"
                                            />
                                        </div>
                                        {(errors.countryCode || errors.whatsappNumber) && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {errors.whatsappNumber?.message ??
                                                    errors.countryCode?.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="pt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-t border-gray-100 dark:border-white/10">
                                    <p className="text-[11px] text-gray-500 dark:text-gray-400 max-w-sm">
                                        By submitting you consent to be contacted via WhatsApp, phone or email.
                                    </p>
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-luxury-primary via-luxury-gold to-luxury-navy px-6 py-2.5 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(185,37,120,0.35)] transition-shadow hover:shadow-[0_12px_32px_rgba(185,37,120,0.45)] disabled:opacity-60"
                                    >
                                        {isSubmitting && (
                                            <span className="mr-2 h-3.5 w-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                        )}
                                        Submit
                                    </motion.button>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
