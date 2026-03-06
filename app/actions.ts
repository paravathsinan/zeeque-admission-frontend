"use server";

export async function submitEnquiry(data: Record<string, unknown>) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Mock API Received Enquiry:", data);
    return { success: true, message: "Enquiry submitted successfully." };
}

export async function submitFooterEnquiry(data: {
    name: string;
    email: string;
    phone: string;
    message: string;
}) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Footer Enquiry:", data);
    return { success: true, message: "Thank you. We will get back to you soon." };
}
