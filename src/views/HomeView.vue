<template>
    <section>
        <div>
            <PageTitle title="Witamy w WorkWise Assistive!" />
            <p><span style="font-weight: bold;">WorkWise Assistive</span> standaryzuje, automatyzuje oraz ułatwia podgląd i konfigurację stacji oraz użytkowników.</p>
        </div>
        <div>
            <h2>Obszary zastosowania WorkWise Assistive:</h2>
            <ul>
                <li>Wyświetlanie komunikatów na stacjach końcowych</li>
                <li>Raport z użycia aplikacji</li>
                <li>Raport dostępności serwerów</li>
                <li>Audyt grup domenowych i uprawnień do zasobów dyskowych</li>
                <li>Obsługa ankiet użytkowników i wyników z realizacji zgłoszeń w systemie ticketowym</li>
                <li>Zarządzanie dostępem do stacji</li>
                <li>Kontrola nad kontami i hasłami pracowników</li>
                <li>Pomoc dla pierwszej linii wsparcia - implementacja sztucznej inteligencji, która odpowie na pytania użytkownika i na podstawie określonych wytycznych założy odpowiednie zgłoszenie lub wykona dowolną inną akcję, która wcześniej została ustalona.</li>
            </ul>
        </div>
    </section>
</template>
<script setup>
import PageTitle from '@/components/PageTitle.vue'

</script>
<style scoped>
section {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
}

li {
    text-align: left;
}
</style>