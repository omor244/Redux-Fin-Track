import React, { useState } from 'react';
import {
    CreditCard,
    ShieldCheck,
    ArrowLeft,
    Info,
    ArrowUpCircle,
    ArrowDownCircle,
    Landmark,
    Lock
} from 'lucide-react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { useAddPaymentMutation } from '../../Redux/Api/PaymentsApi';
import type { InputGroupProps, PaymentTabProps, SummaryRowProps } from '@/Type/Type';




const ManualPayment = () => {
    const navigate = useNavigate();
    const  user  = {
        name: "omor",
        email: "omoronfire90909@gmail.com"
    }

    const [paymentMethod, setPaymentMethod] = useState('card');

 
    const [formData, setFormData] = useState({
        productName: '',
        type: 'income',
        cardNumber: '',
        expiry: '',
        cvc: '',
        senderBankName: '',
        senderAccountName: '',
        transactionId: '',
        amount: 1304.00, 
        userName: user?.name || '',
        userEmail: user?.email || '',
        status: 'Pending',
        timestamp: new Date().toISOString()
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const [addPayment] = useAddPaymentMutation();

    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
          
        // VALIDATION LOGIC
        if (paymentMethod === 'bank' && !formData.transactionId) {
            return Swal.fire('Error', 'Transaction ID is required for Bank Transfers', 'error');
        }

        try {
            // 3. Trigger the Redux mutation

            console.log(formData)
            const res = await addPayment(formData).unwrap();
               console.log(res)
         

            if (res.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Payment Submitted',
                    text: 'Your transaction is now under review.',
                    confirmButtonColor: '#ea580c',
                });
               
            }
        } catch (error) {
            console.error("Redux Post Error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: (error as any)?.data?.message || 'Something went wrong'
            });
        }
    };

    return (
        <div className="p-6 md:p-10 bg-[#FAFBFF] min-h-screen font-sans text-slate-900">
            {/* --- Navigation & Header --- */}
            <div className="max-w-5xl mx-auto mb-12">
                <button
                    onClick={() => navigate(-1)}
                    className="group flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-orange-600 transition-all mb-6"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Dashboard
                </button>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-black shadow-lg shadow-orange-600/20">
                        <CreditCard size={24} />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight">Secure Checkout</h1>
                        <p className="text-slate-500 font-medium">Complete your manual transaction below.</p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* --- Left Column: Inputs (8 Cols) --- */}
                <div className="lg:col-span-8 space-y-6">

                    {/* 1. Method Selection */}
                    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                        <header className="flex justify-between items-center mb-8">
                            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-3">
                                <span className="w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-[10px]">01</span>
                                Choose Method
                            </h3>
                            <div className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-tighter flex items-center gap-1">
                                <ShieldCheck size={12} /> Secure Connection
                            </div>
                        </header>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <PaymentTab
                                active={paymentMethod === 'card'}
                                onClick={() => setPaymentMethod('card')}
                                icon={<CreditCard size={20} />}
                                title="Credit Card"
                                subtitle="Instant Approval"
                            />
                            <PaymentTab
                                active={paymentMethod === 'bank'}
                                onClick={() => setPaymentMethod('bank')}
                                icon={<Landmark size={20} />}
                                title="Bank Transfer"
                                subtitle="Manual Review"
                            />
                        </div>
                    </div>

                    {/* 2. Form Fields */}
                    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-8">
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-3">
                            <span className="w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-[10px]">02</span>
                            Transaction Info
                        </h3>

                        {/* Toggle Type */}
                        <div className="flex p-1 bg-slate-100 rounded-2xl w-fit">
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, type: 'income' })}
                                className={`px-6 py-2 rounded-xl text-xs font-black uppercase transition-all flex items-center gap-2 ${formData.type === 'income' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500'}`}
                            >
                                <ArrowUpCircle size={14} /> Income
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, type: 'expense' })}
                                className={`px-6 py-2 rounded-xl text-xs font-black uppercase transition-all flex items-center gap-2 ${formData.type === 'expense' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-500'}`}
                            >
                                <ArrowDownCircle size={14} /> Expense
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <InputGroup
                                label="Purpose of Payment"
                                name="productName"
                                placeholder="e.g. Premium Plan Upgrade"
                                value={formData.productName}
                                onChange={handleInputChange}
                            />

                            {paymentMethod === 'card' ? (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <InputGroup label="Card Number" name="cardNumber" placeholder="xxxx xxxx xxxx xxxx" onChange={handleInputChange} />
                                    <div className="grid grid-cols-2 gap-4">
                                        <InputGroup label="Expiry" name="expiry" placeholder="MM/YY" onChange={handleInputChange} />
                                        <InputGroup label="CVC" name="cvc" placeholder="***" onChange={handleInputChange} />
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <InputGroup label="Sender Bank" name="senderBankName" placeholder="Bank Name" onChange={handleInputChange} />
                                        <InputGroup label="Account Name" name="senderAccountName" placeholder="Holder Name" onChange={handleInputChange} />
                                    </div>
                                    <InputGroup label="Transaction ID / Reference" name="transactionId" placeholder="Enter ID from receipt" onChange={handleInputChange} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* --- Right Column: Summary (4 Cols) --- */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white sticky top-10 shadow-2xl shadow-slate-900/40 border border-white/5 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 blur-[50px] -mr-16 -mt-16 rounded-full"></div>

                        <h3 className="text-xl font-black mb-8 relative z-10"> Summary</h3>

                        <div className="space-y-5 relative z-10">
                            <SummaryRow label="Subtotal" value="$1,299.00" />
                            <SummaryRow label="Platform Fee" value="$5.00" />
                            <div className="h-px bg-white/10 my-2"></div>
                            {/* <div className="flex justify-between items-end">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Amount</span>
                                <span className="text-4xl font-black text-orange-500 tracking-tighter">$1,304.00</span>
                            </div> */}
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-10 bg-primary hover:bg-orange-500 text-black font-black py-5 rounded-2xl shadow-xl shadow-orange-600/30 transition-all active:scale-95 flex items-center justify-center gap-3 group uppercase tracking-widest text-xs"
                        >
                            Confirm Payment
                            <Lock size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col items-center gap-3">
                            <div className="flex gap-4">
                                <ShieldCheck size={24} className="text-emerald-500 opacity-50" />
                                <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-tight">
                                    Encrypted by <br /> <span className="text-white">FinTrack Secure</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Info */}
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 flex gap-4">
                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                            <Info size={18} />
                        </div>
                        <p className="text-[11px] text-slate-500 font-bold leading-relaxed">
                            Approvals are processed by our audit team within <span className="text-slate-900">2 hours</span>. Ensure your details match your receipt.
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

// --- Helper Components for Clean Code ---

const PaymentTab = ({ active, onClick, icon, title, subtitle }: PaymentTabProps) => (
    <button
        type="button"
        onClick={onClick}
        className={`p-5 rounded-3xl border-2 transition-all flex items-center gap-4 text-left ${active
                ? 'border-orange-600 bg-orange-50/50 shadow-sm'
                : 'border-slate-50 bg-slate-50/50 hover:border-slate-200'
            }`}
    >
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${active ? 'bg-primary text-black' : 'bg-white text-slate-400 shadow-sm'}`}>
            {icon}
        </div>
        <div>
            <div className={`font-black text-sm ${active ? 'text-slate-900' : 'text-slate-400'}`}>{title}</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{subtitle}</div>
        </div>
    </button>
);

const InputGroup = ({ label, ...props }: InputGroupProps ) => (
    <div className="w-full">
        <label className="text-[10px] font-black uppercase text-slate-400 ml-4 mb-2 block tracking-widest">{label}</label>
        <input
            {...props}
            required
            className="w-full px-6 py-4 bg-slate-50 border border-transparent rounded-2xl outline-none focus:ring-4 focus:ring-orange-600/5 focus:bg-white focus:border-orange-600/20 transition-all font-semibold text-sm placeholder:text-slate-300"
        />
    </div>
);

const SummaryRow = ({ label, value }: SummaryRowProps) => (
    <div className="flex justify-between items-center">
        <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{label}</span>
        <span className="font-black text-sm">{value}</span>
    </div>
);

export default ManualPayment;