<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { currencyFormat } from '../utils/currency'
import { calculateCompoundIncome } from '../utils/calculateCompoundIncome';
import { TAX_ARCA, TAX_SELIC } from '../config/constants';

const initialInvestment = ref(200)
const monthlyInvestment = ref(200)
const investmentTimeMonth = ref(24)
const selicTaxIncome = ref(0)
const arcaTaxIncome = ref(0)

const setIncomeTaxs = () => {
  selicTaxIncome.value = calculateCompoundIncome(initialInvestment.value, TAX_SELIC, investmentTimeMonth.value, monthlyInvestment.value)
  arcaTaxIncome.value = calculateCompoundIncome(initialInvestment.value, TAX_ARCA, investmentTimeMonth.value, monthlyInvestment.value)
}

const handleChange = (event: Event) => {
  const target = (event.target as HTMLInputElement)
  const newValue = parseInt(target.value)
  const identifier = target.id

  switch (identifier) {
    case 'initial':
        initialInvestment.value = newValue
        break;
    case 'monthly':
        monthlyInvestment.value = newValue
        break;
    case 'time':
        investmentTimeMonth.value = newValue
        break;
    default:
  }

  setIncomeTaxs()
};

setIncomeTaxs()

</script>

<template>
    <div class="grid md:grid-cols-2 gap-8">
        <div>
            <div class="flex flex-col items-center md:max-w-xl mb-8">
                <div class="mb-3 w-full">
                    <p class="text-xl mb-4">Quanto gostaria de investir?</p>
                    <input
                      id="initial" 
                      class="w-full rounded-lg h-2 appearance-none accent-green bg-gray border-transparent border-0 text-white cursor-pointer dark:bg-gray-100" 
                      type="range"
                      min="100"
                      max="1000"
                      step="100"
                      :value="initialInvestment"
                      @input="handleChange"
                    >
                </div>
                <strong class="text-2xl">{{ currencyFormat(initialInvestment) }}</strong>
            </div>

            <div class="flex flex-col items-center md:max-w-xl mb-8">
                <div class="mb-3 w-full">
                    <p class="text-xl mb-4">Por mês, quanto investiria?</p>
                    <input
                      id="monthly" 
                      class="w-full rounded-lg h-2 appearance-none accent-green bg-gray border-transparent border-0 text-white cursor-pointer dark:bg-gray-100" 
                      type="range"
                      min="100"
                      max="1000"
                      step="100"
                      :value="monthlyInvestment"
                      @input="handleChange"
                    >
                </div>
                <strong class="text-2xl">{{ currencyFormat(monthlyInvestment) }}</strong>
            </div>

            <div class="flex flex-col items-center md:max-w-xl mb-8">
                <div class="mb-3 w-full">
                    <p class="text-xl mb-4">Quanto tempo deixaria seu dinheiro investido?</p>
                    <input
                      id="time"
                      class="w-full rounded-lg h-2 appearance-none accent-green bg-gray border-transparent border-0 text-white cursor-pointer dark:bg-gray-100" 
                      type="range"
                      min="12"
                      max="60"
                      step="12"
                      :value="investmentTimeMonth"
                      @input="handleChange"
                    >
                </div>
                <strong class="text-2xl">{{ investmentTimeMonth }} meses</strong>
            </div>
        </div>
    
        <div>
            <p class="font-medium">Em {{ investmentTimeMonth }} meses você teria:</p>

            <div class="text-center rounded bg-gray-100 border border-gray-300 px-8 py-6 my-3">
                <p class="mb-3">TAXA SELIC</p>
                <strong class="text-3xl md:text-5xl">{{ currencyFormat(selicTaxIncome) }}</strong>
            </div>

            <div class="text-center rounded bg-gray-100 border border-gray-300 px-8 py-6 my-3">
                <p class="mb-3">Fundo Arca</p>
                <strong class="text-3xl md:text-5xl">{{ currencyFormat(arcaTaxIncome) }}</strong>
            </div>

            <hr class="text-green border-2 rounded my-8">

            <div class="tracking-widest text-sm">
                <p class="my-4">TAXA SELIC: <strong>9,25%</strong></p>
                <p class="my-4">RENTABILIDADE DO ARCA: <strong>18% a.a.</strong></p>
            </div>

            <div class="flex items-baseline">
                <i class="mt-2">
                    <FontAwesomeIcon :icon="faQuestionCircle" />
                </i>
                
                <div class="ml-4 text-sm text-gray-600">
                    <p class="mb-4">Valores utilizados no simulador de investimentos (referentes á data de última atualização - esses valores podem alterar de acordo com o mercado);</p>
    
                    <span>- Data da última atualização: 10/01/2024</span>
                </div>
            </div>
        </div>

    </div>

</template>