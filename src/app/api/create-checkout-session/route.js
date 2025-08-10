import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("🟡 Incoming Plan:", body.plan);

    const { plan } = body;

    if (!plan || !plan.price) {
      console.error("🔴 Plan or price missing in request body");
      return new Response(JSON.stringify({ error: "Invalid plan data" }), { status: 400 });
    }

    const rawPrice = parseInt(plan.price.replace(/[^0-9]/g, ""));
    const unitAmount = isNaN(rawPrice) ? 1000 : rawPrice * 100;
    console.log("🟢 unitAmount (in cents):", unitAmount);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: plan.name,
              description: plan.description,
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${request.nextUrl.origin}/success`,
      cancel_url: `${request.nextUrl.origin}/cancel`,
    });

    console.log("✅ Stripe session created:", session.id);

    return new Response(JSON.stringify({ id: session.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("❌ Stripe Checkout Session Error:", error.message);
    return new Response(
      JSON.stringify({ error: "Something went wrong creating session" }),
      { status: 500 }
    );
  }
}
