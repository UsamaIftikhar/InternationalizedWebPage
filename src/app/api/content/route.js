export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/locales/${locale}.json`);
        if (!response.ok) {
            return new Response(JSON.stringify({ error: 'Locale file not found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const translations = await response.json();
        return new Response(JSON.stringify(translations), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
        });
    }
}
