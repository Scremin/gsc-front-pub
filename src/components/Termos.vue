<style scoped>
    @import url("../termos-style.scss");
</style>

<template>
    <div>
        <div class="main-aux-redirect" :style="{'padding':'1%'}">

            <v-btn @click="reChamarOverlay()"
            block
            :style="{'margin-bottom':'1%'}"
            color="error"
            >
                Voltar
            </v-btn>

            <!-- Termos de uso -->
            <div :style="{'font-size':'0.8rem'}" v-if="termos_overlay">

                <span :style="{'font-size':'1.6rem'}">{{ tx1 }}</span>
                <br>
                {{ tx11 }}
                <br>
                <span :style="{'font-size':'1.6rem'}">{{ tx12 }}</span>
                <br>
                {{ tx13 }}
                <br>
                <span :style="{'font-weight':'bold'}">{{ tx14 }}</span>
                <br>
                <span :style="{'font-weight':'bold'}">{{ tx15 }}</span>
                <br>
                <span :style="{'font-weight':'bold'}">{{ tx16 }}</span>
                <br>
                <span :style="{'font-weight':'bold'}">{{ tx17 }}</span>
                <br>
                <span :style="{'font-weight':'bold'}">{{ tx18 }}</span>
                <br>
                {{ tx19 }}
                <br>
                <span :style="{'font-size':'1.6rem'}">{{ tx110}}</span>
                <br>
                {{ tx111 }}
                {{ tx112 }}
                <br>
                <span :style="{'font-size':'1.6rem'}">{{ tx113 }}</span><br>
                {{ tx114 }}
                <br>
                <span :style="{'font-size':'1.6rem'}">{{ tx115 }}</span><br>
                {{ tx116 }}
                <br>
                <span :style="{'font-size':'1.6rem'}">{{ tx117 }}</span><br>
                {{ tx118 }}
                <br>
                <span :style="{'font-size':'1.2rem'}">{{ tx119 }}</span><br>
                {{ tx1110 }}
                <br>
                <span :style="{'font-size':'1.2rem'}">{{ tx1111 }}</span><br>
                {{ tx1112 }}
            </div>

            <div v-if="politica_overlay" :style="{'font-size':'0.8rem'}">

                <span :style="{'font-size':'2rem'}">{{ p1 }}</span><br>
                <span>{{ p2 }}</span><br>
                <span>{{ p3 }}</span><br>
                <span>{{ p4 }}</span><br>
                <span>{{ p5 }}</span><br>
                <span>{{ p6 }}</span><br>
                <span>{{ p7 }}</span><br>
                <span>{{ p8 }}</span><br>
                <span :style="{'font-size':'2rem'}">{{ p9 }}</span><br>

                <span :style="{'font-size':'1.5rem'}">{{ p11 }}</span><br>
                <span>{{ p12 }}</span><br>
                <span :style="{'font-size':'1.5rem'}">{{ p13 }}</span><br>
                <span>{{ p14 }}</span><br>
                <span :style="{'font-size':'1.5rem'}">{{ p15 }}</span><br>
                <span>{{ p16 }}</span><br>
                <span :style="{'font-size':'1.5rem'}">{{ p17 }}</span><br>
                <span>{{ p18 }}</span><br>
                <span>{{ p19 }}</span><br>

                <span>{{ p21 }}</span><br>
                <span>{{ p22 }}</span><br>
                <span>{{ p23 }}</span><br>
                <span>{{ p24 }}</span><br>
                <span>{{ p25 }}</span><br>
                <span>{{ p26 }}</span><br>
                <span>{{ p27 }}</span><br>
                <span>{{ p28 }}</span><br>
                <span>{{ p29 }}</span><br>

                <span>{{ p31 }}</span><br>
                <span>{{ p32 }}</span><br>
                <span>{{ p33 }}</span><br>
                <span :style="{'font-size':'1.5rem'}">{{ p34 }}</span><br>
                <span>{{ p35 }}</span><br>
                <span>{{ p36 }}</span><br>
                <span>{{ p37 }}</span><br>
                <span>{{ p38 }}</span><br>
                <span>{{ p39 }}</span><br>

                <span>{{ p41 }}</span><br>
                <span :style="{'font-size':'1.5rem'}">{{ p42 }}</span><br>
                <span>{{ p43 }}</span><br>
                <span>{{ p44 }}</span><br>
                <span>{{ p45 }}</span><br>
                <span>{{ p46 }}</span><br>
                <span :style="{'font-size':'1.5rem'}">{{ p47 }}</span><br>
                <span>{{ p48 }}</span><br>
                <span :style="{'font-weight':'bold'}">{{ p49 }}</span><br>

                <span>{{ p51 }}</span><br>
                <span>{{ p52 }}</span><br>
                <span>{{ p53 }}</span><br>
                <span>{{ p54 }}</span><br>
                <span>{{ p55 }}</span><br>
                <span>{{ p56 }}</span><br>
                <span>{{ p57 }}</span><br>
                <span>{{ p58 }}</span><br>
                <span>{{ p59 }}</span><br>

                <span>{{ p61 }}</span><br>
                <span>{{ p62 }}</span><br>
                <span>{{ p63 }}</span><br>
                <span>{{ p64 }}</span><br>
                <span>{{ p65 }}</span><br>
                <span>{{ p66 }}</span><br>
                <span>{{ p67 }}</span><br>
                <span>{{ p68 }}</span><br>
                <span>{{ p69 }}</span><br>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        //tx1: '...', //'Aqui ficará o texto com os termos',
        tx1: '1. Termos',
        tx11: 'Ao acessar ao site Green House Covilhã, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.',
        tx12: '2. Uso de Licença',
        tx13: 'É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Green House Covilhã , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:',
        tx14: '1.	modificar ou copiar os materiais;',
        tx15: '2.	usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);',
        tx16: '3.	tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Green House Covilhã; ',
        tx17: '4.	remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou',
        tx18: '5.	transferir os materiais para outra pessoa ou "espelhe" os materiais em qualquer outro servidor.',
        tx19: 'Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Green House Covilhã a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.',
        tx110: '3. Isenção de responsabilidade',
        tx111: '1.	Os materiais no site da Green House Covilhã são fornecidos "como estão". Green House Covilhã não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.',
        tx112: '2.	Além disso, o Green House Covilhã não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.',
        tx113: '4. Limitações',
        tx114: 'Em nenhum caso o Green House Covilhã ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Green House Covilhã, mesmo que Green House Covilhã ou um representante autorizado da Green House Covilhã tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.',
        tx115: '5. Precisão dos materiais',
        tx116: 'Os materiais exibidos no site da Green House Covilhã podem incluir erros técnicos, tipográficos ou fotográficos. Green House Covilhã não garante que qualquer material em seu site seja preciso, completo ou atual. Green House Covilhã pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Green House Covilhã não se compromete a atualizar os materiais.',
        tx117: '6. Links',
        tx118: 'O Green House Covilhã não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Green House Covilhã do site. O uso de qualquer site vinculado é por conta e risco do usuário.',
        tx119: 'Modificações',
        tx1110: 'O Green House Covilhã pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.',
        tx1111: 'Lei aplicável',
        tx1112: 'Estes termos e condições são regidos e interpretados de acordo com as leis do Green House Covilhã e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.',
        
        //tx2: '...', //'Aqui ficará o texto com a política de privacidade',
        p1: 'Política de Privacidade',
        p2:' A sua privacidade é importante para nós. É política do Green House Covilhã respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Green House Covilhã, e outros sites que possuímos e operamos.',
        p3:'Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.',
        p4:'Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.',
        p5:'Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.',
        p6:'O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.',
        p7:'Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.',
        p8:'O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.',
        p9:'Política de Cookies Green House Covilhã',
        p11:'O que são cookies?',
        p12:'Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou "quebrar certos elementos da funcionalidade do site."',
        p13:'Como usamos os cookies?',
        p14:'Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados para fornecer um serviço que você usa.',
        p15:'Desativar cookies',
        p16:'Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.',
        p17:'Cookies que definimos',
        p18:'•	Cookies relacionados à conta',
        p19:'Se você criar uma conta connosco, usaremos cookies para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.',
        p21:'•	Cookies relacionados ao login',
        p22:'Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.',
        p23:'•	Cookies relacionados a boletins por e-mail',
        p24:'Este site oferece serviços de assinatura de boletim informativo ou e-mail e os cookies podem ser usados para lembrar se você já está registrado e se deve mostrar determinadas notificações válidas apenas para usuários inscritos / não inscritos.',
        p25:'•	Pedidos processando cookies relacionados',
        p26:'Este site oferece facilidades de comércio eletrônico ou pagamento e alguns cookies são essenciais para garantir que seu pedido seja lembrado entre as páginas, para que possamos processá-lo adequadamente.',
        p27:'•	Cookies relacionados a pesquisas',
        p28:'Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.',
        p29:'•	Cookies relacionados a formulários',
        p31:'Quando você envia dados por meio de um formulário como os encontrados nas páginas de contacto ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.',
        p32:'•	Cookies de preferências do site',
        p33:'Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página for afetada por suas preferências.',
        p34:'Cookies de Terceiros',
        p35:'Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.',
        p36:'•	Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente.',
        p37:'Para mais informações sobre cookies do Google Analytics, consulte a página oficial do Google Analytics.',
        p38:'•	As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender como podemos melhorar o site para você.',
        p39:'•	Periodicamente, testamos novos recursos e fazemos alterações subtis na maneira como o site se apresenta. Quando ainda estamos testando novos recursos, esses cookies podem ser usados para garantir que você receba uma experiência consistente enquanto estiver no site, enquanto entendemos quais otimizações os nossos usuários mais apreciam.',
        p41:'•	À medida que vendemos produtos, é importante entendermos as estatísticas sobre quantos visitantes de nosso site realmente compram e, portanto, esse é o tipo de dados que esses cookies rastrearão. Isso é importante para você, pois significa que podemos fazer previsões de negócios com precisão que nos permitem analizar nossos custos de publicidade e produtos para garantir o melhor preço possível.',
        p42:'Compromisso do Usuário',
        p43:'O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Green House Covilhã oferece no site e com caráter enunciativo, mas não limitativo:',
        p44:'•	A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;',
        p45:'•	B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou casas de apostas (ex.: Moosh), jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;',
        p46:'•	C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Green House Covilhã, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.',
        p47:'Mais informações',
        p48:'Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.',
        p49:'Esta política é efetiva a partir de July/2021.',
        p51:'Termos e Condições de Compra e Venda de Green Social Clube, com sede na Rua da Olivença,54, 6200-156, Covilhã, doravante denominada simplesmente Green Social Clube, e, de outro lado, o cliente Green Social Clube, qualificado no momento da compra dos produtos Green Social Clube, doravante denominado simplesmente Cliente.',
        p52:'Considerando que a Green Social Clube realiza venda de produtos e serviços pela internet; Considerando o interesse do Cliente na compra dos produtos oferecidos pela Green Social Clube ("Produtos") em seus canais de venda; O presente contrato tem por finalidade estabelecer as condições gerais de uso e compra de produtos e serviços do cliente do site Green Social Clube.',
        p53:'I. Confidencialidade: é de responsabilidade da Green Social Clube a preservação da confidencialidade de todos os dados e informações fornecidos pelo Cliente no processo de compra. A segurança do site é auditada diariamente e garantida contra a ação de hackers, através do selo "Site Blindado".',
        p54:'II. Serviço de Atendimento ao Cliente (SAC): O cliente dispõe desse serviço para sanar suas dúvidas, solucionar eventuais solicitações ou reclamações a respeito do seu pedido ou de qualquer conteúdo disponibilizado no site. O SAC poderá ser acionado por meio de telefone ou de formulário do site.',
        p55:'III. Política de entrega: o prazo para entrega dos Produtos é informado durante o procedimento de compra, contabilizado em dias úteis. As entregas dos Produtos são realizadas de segunda a sexta-feira, das 8h às 22h. Excepcionalmente, algumas entregas de Produtos podem ocorrer aos sábados, domingos e feriados.',
        p56:'III.I - A conferência da adequação das dimensões do produto é de responsabilidade do Cliente, que deverá se assegurar de que estas estão de acordo com os limites espaciais dos elevadores, portas e corredores do local da entrega. Não será realizada a montagem ou desmontagem do produto, transporte pela escada e/ou portas e janelas, ou içamento das entregas.',
        p57:'III.II - Serão realizadas até três tentativas de entrega no local informado, em dias alternados, com intervalo de até 48h entre uma entrega e outra. É indispensável que, no endereço solicitado, haja uma pessoa autorizada pelo comprador, maior de 18 anos, e portando documento de identificação para receber a mercadoria e assinar o protocolo de entrega. Se houver três tentativas de entrega sem sucesso, o pedido retornará para o Centro de Distribuição da Green Social Clube.',
        p58:'III.III - Após a finalização do pedido não é possível alterar a forma de pagamento e/ou endereço de entrega, solicitar adiantamento ou, ainda, prioridade da entrega.',
        p59:'III.IV - O prazo de entrega informado durante o procedimento de compra do Produto leva em consideração o estoque, a região, o processo de emissão da nota fiscal e o tempo de preparo do produto. A cada atualização no status de entrega do pedido, o sistema da Green Social Clube envia, automaticamente, e-mails de alerta para o Cliente.',
        p61:'III.V - O valor do frete da entrega é calculado com base no local de entrega, peso e dimensões do Produto.',
        p62:'III.VI - A Green Social Clube não autoriza a transportadora a: entrar no domicílio; entregar por meios alternativos (exemplo: içar produto por janela); realizar instalação ou manutenção de produtos; abrir a embalagem do produto; realizar entrega em endereço diferente do que consta no DANFE; realizar entrega a menor de idade ou sem documento de identificação.',
        p63:'III.VII - A Green Social Clube não se responsabiliza pela retenção de mercadorias na SEFAZ quando esta se dever exclusivamente a pendências do cliente, sendo, portanto, necessário seu comparecimento no posto fiscal para que a mercadoria seja liberada, tendo em vista que nestes casos as informações referentes a liberações e pagamentos só são passadas aos interessados.',
        p64:'IV. Direito de arrependimento: ao Cliente será facultado o exercício do direito de arrependimento da compra, com a finalidade de devolução do Produto, hipótese na qual deverão ser observadas as seguintes condições: o prazo de desistência da compra do produto é de até 7 (sete) dias corridos, a contar da data do recebimento; em caso de devolução, o produto deverá ser devolvido à Green Social Clube na embalagem original, acompanhado do DANFE (Documento Auxiliar da Nota Fiscal Eletrônica), do manual e de todos os seus acessórios.',
        p65:'IV.I - O Cliente deverá solicitar a devolução através do Serviço de Atendimento ao Cliente (SAC) ou diretamente no Painel de Controle, no tópico "cancelar pedido". As despesas decorrentes de coleta ou postagem do Produto serão custeadas pela Green Social Clube.',
        p66:'IV.II - Após a chegada do produto ao Centro de Distribuição, a Green Social Clube verificará se as condições supra citadas foram atendidas. Em caso afirmativo, providenciará a restituição no valor total da compra.',
        p67:'IV.III - Em compras com cartão de crédito a administradora do cartão será notificada e o estorno ocorrerá na fatura seguinte ou na posterior, de uma só vez, seja qual for o número de parcelas utilizado na compra. O prazo de ressarcimento e, ainda, a cobrança das parcelas remanescentes após o estorno integral do valor do Produto no cartão de crédito do Cliente realizado pela Green Social Clube, é de responsabilidade da administradora do cartão. Na hipótese de cobrança de parcelas futuras pela administradora do cartão, o Cliente não será onerado, vez que a Green Social Clube, conforme mencionado acima, realiza o estorno do valor integral do Produto em uma única vez, sendo o crédito referente ao estorno concedido integralmente pela administradora do cartão na fatura de cobrança subsequente ao mês do cancelamento.',
        p68:'IV.IV - Em compras pagas com boleto bancário ou débito em conta, a restituição será efetuada por meio de depósito bancário, em até 10 (dez) dias úteis, somente na conta corrente do(a) comprador(a), que deve ser individual. É necessário que o CPF do titular da conta corrente.',

        }
    },
    computed: {
        termos_overlay(){
            return this.$store.state.termos_overlay
        },
        politica_overlay(){
            return this.$store.state.politica_overlay
        }
    },
    methods: {
        reChamarOverlay(){

            //this.overlay = true // REable overlay
            this.$store.state.main_overlay = true // REativar inatividade.
            this.$store.state.footer_overlay = true // ainda deve está inativo.

            this.$store.state.termos_overlay = false
            this.$store.state.politica_overlay = false
            
            this.$router.push('/')
        }
    }
}
</script>