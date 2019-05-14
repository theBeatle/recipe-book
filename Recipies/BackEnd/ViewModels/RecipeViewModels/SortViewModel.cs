namespace BackEnd.ViewModels.RecipeViewModels
{

        public class SortViewModel
        {
            public SortState TopicSort { get; private set; } 
            public SortState RaitingSort { get; private set; }  
            public SortState ViewsCounterSort { get; private set; }  
            public SortState Current { get; private set; }    

            public SortViewModel(SortState sortOrder)
            {
                TopicSort = sortOrder == SortState.TopicAsc ? SortState.TopicDesc : SortState.TopicAsc;
                RaitingSort = sortOrder == SortState.RaitingAsc ? SortState.RaitingDesc : SortState.RaitingAsc;
                ViewsCounterSort = sortOrder == SortState.ViewsCounterAsc ? SortState.ViewsCounterDesc : SortState.ViewsCounterAsc;
                Current = sortOrder;
            }
        }
}


